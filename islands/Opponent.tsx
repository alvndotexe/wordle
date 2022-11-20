import { Signal } from "@preact/signals";
import { GameOptions, GameState } from "../hooks/GameState.ts";
import { PossibleColours, getColour } from "./Wordle.tsx";

function LetterBox({ condition }: { condition: () => PossibleColours }) {
  return (
    <div
      class={`grid place-items-center w-2 h-2 text-white ${getColour(
        condition
      )}`}
    ></div>
  );
}

function Row({ word, solution }: { word: string; solution: string }) {
  const boxes = word.split("").concat(new Array(5 - word.length).fill(""));
  function condition(letter: string, index: number) {
    return letter === ""
      ? null
      : !solution.includes(letter)
      ? null
      : solution.indexOf(letter) === index
      ? true
      : "maybe";
  }
  return (
    <>
      {boxes.map((e, index) => (
        <LetterBox condition={() => condition(e, index)} />
      ))}
    </>
  );
}

export default function Opponent({
  state,
  gameOptions,
}: {
  state: GameState;
  gameOptions: Signal<GameOptions>;
}) {
  const rows = state.leader.value.attempts.concat(
    new Array(6 - state.leader.value.attempts.length).fill("")
  );
  if (
    state.solution.value === "" ||
    state.leader.value.clientID === "" ||
    state.leader.value.clientID === gameOptions.value.clientID
  )
    return null;
  else
    return (
      <div className="grid place-items-center">
        <div class="grid grid-cols-5 grid-rows-6 w-[max-content] h-[max-content] gap-x-1 gap-y-1">
          {rows.map((e, index) => (
            <Row word={e} solution={state.solution.value} />
          ))}
        </div>
      </div>
    );
}
