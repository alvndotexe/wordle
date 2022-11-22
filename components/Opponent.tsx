import { Player } from "../hooks/GameState.ts";
import { PossibleColours, getColour } from "../islands/Wordle.tsx";

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
  player,
  solution,
}: {
  player: Player;
  solution: string;
}) {
  const rows = player.attempts.concat(
    new Array(6 - player.attempts.length).fill("")
  );
  return (
    <div className="grid place-items-center">
      <div class="grid grid-cols-5 grid-rows-6 w-[max-content] h-[max-content] gap-x-1 gap-y-1">
        {rows.map((e) => (
          <Row word={e} solution={solution} />
        ))}
      </div>
    </div>
  );
}
