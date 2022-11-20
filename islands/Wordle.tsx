import { computed, signal } from "@preact/signals";
import { IS_BROWSER } from "https://deno.land/x/fresh@1.1.2/runtime.ts";
import { createPortal, useEffect } from "preact/compat";
import { GameState } from "../hooks/GameState.ts";
import {
  AttemptMessage,
  completeMessage,
  ExistingPlayerMessage,
  NewPlayerMessage,
} from "../hooks/MessageTypes.ts";
import { SocketWrapper } from "../hooks/SocketWrapper.ts";
import Modal from "./Modal.tsx";
import Opponent from "./Opponent.tsx";

const gameID = IS_BROWSER ? new URL(location.href).pathname : "";
const pain = IS_BROWSER ? new URL(location.href) : undefined;
const url = IS_BROWSER
  ? `wss://${pain?.host}/socket${pain?.pathname}`
  : `wss://127.0.0.1:8000/socket${gameID}`;
console.log(url);

const gameOptions = signal({
  words: new Array<string>(),
  gameID: "",
  solution: "",
  clientID: "",
});

export type StoredGameData = {
  attempts: string[];
  clientID: string;
  gameID: string;
};

const state = new GameState(gameOptions);
const socket = new SocketWrapper(new WebSocket(url))
  .onOPen((socket) => {
    const currentGameString = localStorage.getItem(gameID);
    const message: ExistingPlayerMessage | NewPlayerMessage = currentGameString
      ? { ...JSON.parse(currentGameString), messageType: "existingPlayer" }
      : { messageType: "newPlayer" };
    socket.send(message);
  })
  .on("gameOptions", (messageBody) => {
    const currentGameString = localStorage.getItem(gameID);
    const storedData: StoredGameData = currentGameString
      ? JSON.parse(currentGameString)
      : {
          attempts: [],
          clientID: messageBody.clientID,
          gameID: gameID,
        };
    localStorage.setItem(storedData.gameID, JSON.stringify(storedData));
    gameOptions.value = {
      words: messageBody.words,
      solution: messageBody.solution,
      clientID: storedData.clientID,
      gameID: storedData.gameID,
    };
    state.loadPreviousAttempts(storedData);

    state.leader.value = messageBody.leader
      ? messageBody.leader
      : { attempts: [], clientID: "" };
    if (messageBody.leader) {
      state.addLeader(messageBody.leader);
    }
  })
  .on("newLeader", (messageBody) => {
    if (messageBody.leader) {
      state.leader.value = messageBody.leader;
      state.addLeader(messageBody.leader);
    }
  })

  .on("finished", (message) => {
    state.forceGameFinish();
    const storedData: StoredGameData = {
      attempts: state.attempts.value,
      clientID: gameOptions.value.clientID,
      gameID,
    };
    localStorage.setItem(gameID, JSON.stringify(storedData));
    state.hasWon.value = message.winner
      ? message.winner.clientID === gameOptions.value.clientID
      : false;
  })
  .build();

export type PossibleColours = boolean | null | "maybe";

function handleInput(key: string) {
  switch (key) {
    case "Enter":
      state.onEnterKeyPress({
        onSuccess: () => {
          const gameID = gameOptions.value.gameID;
          const messageType: AttemptMessage["messageType"] = "attempt";
          const payload = {
            attempts: state.attempts.value,
            clientID: gameOptions.value.clientID,
          };
          const attempt: AttemptMessage = { ...payload, messageType };
          const storedData: StoredGameData = { ...payload, gameID };
          //TODO success Animation
          localStorage.setItem(gameID, JSON.stringify(storedData));
          socket.send(JSON.stringify(attempt));
        },
        onFailure: () => {
          //TODO Failure Animation
        },
      });
      break;
    case "Backspace":
      state.onBackspaceKeyPress();
      break;
    default:
      state.onKeyPress(key);
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
    state.attempts.value.length - 1 < index ? "text-black" : "text-white";
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
    rowIndex === state.attempts.value.length
      ? state.currentInput.value
      : state.attempts.value[rowIndex]
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
    return rowIndex > state.attempts.value.length
      ? null
      : checkLetter(
          state.attempts.value[rowIndex]
            ? state.attempts.value[rowIndex][index]
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
  const letters = computed(() => new Set(state.attempts.value.flat().join("")));
  if (!state.solution.value.includes(letter) && letters.value.has(letter)) {
    return false;
  }
  if (!letters.value.has(letter)) return null;
  const keyIndex = state.solution.value.indexOf(letter);
  const result =
    keyIndex ===
    state.attempts.value[state.attempts.value.length - 1].indexOf(letter)
      ? true
      : "maybe";
  if (letter === "e") return result;
  return null;
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
            state.onBackspaceKeyPress();
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
      //if guessed correct send solution or out of Attempts
      //TODO localstorage not removing all items
      const message: completeMessage = {
        messageType: "complete",
        attempts: state.attempts.value,
        clientID: gameOptions.value.clientID,
      };
      socket.send(JSON.stringify(message));
    }
    return removeEventListener("keyup", (e) => handleInput(e.key));
  }, [state.isComplete.value]);
  const modal = IS_BROWSER ? document.getElementById("portal")! : null;
  const isOpen = computed(() => state.isComplete.value);
  return (
    <div class="flex flex-col justify-between items-center w-[min(100vw,35rem)] h-full">
      <>
        {isOpen.value && modal
          ? createPortal(<Modal state={state} isOpen={isOpen.value} />, modal)
          : null}
      </>
      <div class="flex-grow-1 flex flex-col justify-center justify-around">
        <Opponent gameOptions={gameOptions} state={state} />
        <div class=" flex-grow-0 flex-shrink-0 grid grid-cols-5 grid-rows-6 gap-2 w-[20rem] h-[max-content] w-[max-content]">
          <Row rowIndex={0} />
          <Row rowIndex={1} />
          <Row rowIndex={2} />
          <Row rowIndex={3} />
          <Row rowIndex={4} />
          <Row rowIndex={5} />
        </div>
      </div>
      <Keyboard />
    </div>
  );
}
