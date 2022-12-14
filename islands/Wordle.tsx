import { computed } from "@preact/signals";
import { IS_BROWSER } from "https://deno.land/x/fresh@1.1.2/runtime.ts";
import { z, ZodError } from "https://deno.land/x/zod@v3.19.1/mod.ts";
import { createPortal, useEffect } from "preact/compat";
import Modal from "../components/Modal.tsx";
import Opponent from "../components/Opponent.tsx";
import { useGameStore, useInputHandlers } from "../hooks/GameState.ts";
import { SocketWrapper } from "../hooks/SocketWrapper.ts";

const gameID = IS_BROWSER
  ? new URL(location.href).pathname.replace("/", "")
  : "";
const pain = IS_BROWSER ? new URL(location.href) : undefined;
const url = IS_BROWSER
  ? `ws://${pain?.host}/socket${pain?.pathname}`
  : `ws://127.0.0.1:8000/socket${gameID}`;

const getInitialState = (): StoredGameData => {
  const storedState = z.object({
    clientID: z.string(),
    attempts: z.array(z.string()),
  });
  const emtyData: StoredGameData = {
    clientID: "",
    attempts: new Array<string>(),
  };
  try {
    const storedData = IS_BROWSER
      ? localStorage.getItem(gameID)
      : JSON.stringify(emtyData);
    return storedData ? storedState.parse(JSON.parse(storedData)) : emtyData;
  } catch (e) {
    if (e instanceof ZodError) return emtyData;
    else throw e;
  }
};

export type StoredGameData = {
  attempts: string[];
  clientID: string;
};

const state = useGameStore(getInitialState);

const { onBackspaceKeyPress, onEnterKeyPress, onKeyPress } =
  useInputHandlers(state);
const socket = new SocketWrapper(new WebSocket(url))
  .onOPen((socket) => {
    socket.send("clientConnectionRequest", {
      clientID: state.game.value.clientID,
    });
  })
  .on("clientConnectionResponse", (messageBody) => {
    if (messageBody.clientID != state.game.value.clientID) {
      localStorage.setItem(
        gameID,
        JSON.stringify({
          attempts: state.game.value.attempts,
          clientID: state.game.value.clientID,
        })
      );
      state.forceReset({
        opponents: messageBody.opponents,
        solution: messageBody.solution,
        words: messageBody.words,
      });
    }
  })
  .on("updatedLeaders", (messageBody) => {
    state.updateOpponents(messageBody.opponents);
  })
  .on("finished", (message) => {
    state.forceGameFinish();
    localStorage.removeItem(gameID);
  });

export type PossibleColours = boolean | null | "maybe";

function handleInput(key: string) {
  switch (key) {
    case "Enter":
      onEnterKeyPress(
        () => {
          socket.send("attempt", {
            attempts: state.game.value.attempts,
            clientID: state.game.value.clientID,
          });
          const storedData: StoredGameData = {
            attempts: state.game.value.attempts,
            clientID: state.game.value.clientID,
          };
          localStorage.setItem(gameID, JSON.stringify(storedData));
        },
        () => {
          //TODO onFailure
        }
      );
      break;
    case "Backspace":
      onBackspaceKeyPress(() => {
        //TODO onFailure
      });
      break;
    default:
      onKeyPress(key, () => {
        //TODO onFailure
      });
  }
}

export function getColour(condition: () => PossibleColours) {
  const value = condition();
  return value === null
    ? "bg-gray-300"
    : value === true
    ? "bg-green-400"
    : value === false
    ? "bg-black"
    : "bg-yellow-400";
}

export function LetterBox({
  index,
  letter,
  condition,
}: {
  index: number;
  letter?: string | undefined;
  condition: () => PossibleColours;
}) {
  const textColour =
    state.attempts.value - 1 < index ? "text-black" : "text-white";
  return (
    <div
      class={`grid place-items-center w-14 h-16 ${textColour} font-bold rounded-[3px] ${
        condition ? getColour(condition) : "bg-gray-300"
      }`}
    >
      {letter ? letter : null}
      &nbsp;
    </div>
  );
}

function Row({ rowIndex }: { rowIndex: number }) {
  const word = computed(() =>
    rowIndex === state.attempts.value
      ? state.currentInput.value
      : state.game.value.attempts[rowIndex]
  );
  function checkLetter(
    letter: string | undefined,
    correctLetter: string,
    solution: string
  ) {
    return letter === undefined
      ? null
      : letter === correctLetter
      ? true
      : solution.includes(letter)
      ? "maybe"
      : false;
  }
  function condition(index: number) {
    return rowIndex > state.attempts.value
      ? null
      : checkLetter(
          state.game.value.attempts[rowIndex]
            ? state.game.value.attempts[rowIndex][index]
            : undefined,
          state.solution.value[index],
          state.solution.value
        );
  }

  return (
    <>
      {[...Array(5).keys()].map((_e, index) => (
        <LetterBox
          index={rowIndex}
          letter={word.value ? word.value[index] : undefined}
          condition={() => condition(index)}
        />
      ))}
    </>
  );
}

const qp = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
const al = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
const zm = ["z", "x", "c", "v", "b", "n", "m"];

function KeyboardKeyCondition(letter: string) {
  const letters = computed(
    () => new Set(state.game.value.attempts.flat().join(""))
  );
  if (!state.solution.value.includes(letter) && letters.value.has(letter)) {
    return false;
  }
  if (!letters.value.has(letter)) return null;
  const keyIndex = state.solution.value.indexOf(letter);
  const valid =
    state.game.value.attempts.filter((a) => a !== "").length >=
    state.attempts.value - 1;
  return !valid
    ? true
    : keyIndex ===
      state.game.value.attempts
        .filter((a) => a !== "")
        [state.attempts.value - 1].indexOf(letter)
    ? true
    : "maybe";
}

function KeyboardLetter({ letter }: { letter: string }) {
  const bgColour = getColour(() => KeyboardKeyCondition(letter));
  return (
    <button
      data-letter={letter}
      //@ts-ignore : event.target
      onClick={(e: Event) => handleInput(e.target.getAttribute("data-letter"))}
      class={`flex-grow-1 h-14 grid place-items-center ${
        bgColour === "bg-black" ? "text-white" : "text-black"
      } rounded-[3px] font-bold ${getColour(() =>
        KeyboardKeyCondition(letter)
      )}`}
    >
      {letter}
    </button>
  );
}

function Keyboard() {
  return (
    <div class="flex-grow-0 flex-shrink-0 grid grid-rows-3 gap-2 w-[min(100vw,35rem)] p-1.5">
      <div class="flex gap-2 justify-center">
        {qp.map((e) => (
          <KeyboardLetter letter={e} />
        ))}
      </div>
      <div class="flex gap-2 justify-center">
        {al.map((e) => (
          <KeyboardLetter letter={e} />
        ))}
      </div>
      <div class="flex gap-2 justify-center">
        <button
          onClick={(e) => handleInput("Enter")}
          class="bg-gray-300 rounded-[3px] grid place-items-center px-2 font-bold text-black"
        >
          Enter
        </button>
        {zm.map((e) => (
          <KeyboardLetter letter={e} />
        ))}
        <button
          onClick={() => {
            onBackspaceKeyPress(() => {
              //TODO onFailure
            });
          }}
          class="bg-gray-300 rounded-[3px] grid place-items-center px-2 font-bold text-black"
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default function GameBoard() {
  useEffect(() => {
    addEventListener("keyup", (e) => handleInput(e.key));
    if (state.isComplete.value) {
      socket.send("complete", {
        attempts: state.game.value.attempts,
        clientID: state.game.value.clientID,
      });
    }
    if (state.game.value.attempts.includes(state.solution.value)) {
      state.forceGameFinish();
    }
    return removeEventListener("keyup", (e) => handleInput(e.key));
  }, [
    state.isComplete.value,
    state.game.value.attempts.includes(state.solution.value),
  ]);
  1;
  return (
    <div class="flex flex-col justify-between items-center w-[min(100vw,35rem)] h-full">
      {IS_BROWSER && state.isComplete.value
        ? createPortal(
            <Modal
              solution={state.solution.value}
              opponents={state.opponents.value}
              show={state.isComplete.value}
              socket={socket}
            />,
            document.getElementById("portal")!
          )
        : null}
      <div class="flex-grow-1 flex flex-col justify-center justify-around">
        {state.opponents.value.length > 1 &&
          state.opponents.value[0].clientID != state.game.value.clientID && (
            <Opponent
              player={state.opponents.value[0]}
              solution={state.solution.value}
            />
          )}
        {state.isLoading.value ? (
          "loading"
        ) : (
          <div class=" flex-grow-0 flex-shrink-0 grid grid-cols-5 grid-rows-6 gap-2 w-[20rem] h-[max-content] w-[max-content]">
            <Row rowIndex={0} />
            <Row rowIndex={1} />
            <Row rowIndex={2} />
            <Row rowIndex={3} />
            <Row rowIndex={4} />
            <Row rowIndex={5} />
          </div>
        )}
      </div>
      <Keyboard />
    </div>
  );
}
