import { useEffect, useRef } from "preact/compat";
import { Player } from "../hooks/GameState.ts";
import { SocketWrapper } from "../hooks/SocketWrapper.ts";
import Opponent from "./Opponent.tsx";

function OtherPlayers({
  player,
  solution,
}: {
  player: Player;
  solution: string;
}) {
  return (
    <div class="flex flex-col">
      <Opponent player={player} solution={solution} />
      <p class="truncate">{player.clientID}</p>
    </div>
  );
}

export default function Modal({
  show,
  solution,
}: {
  show: boolean;
  socket: SocketWrapper;
  opponents: Player[];
  solution: string;
}) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  useEffect(() => {
    if (show) dialogRef.current?.showModal();
    else dialogRef.current?.close();
  }, [show]);
  return (
    <dialog class="flex flex-col rounded-sm gap-3" ref={dialogRef}>
      <p class="border border-black rounded-sm text-center">{solution}</p>
      <button
        class="bg-green-400 rounded-sm p-2"
        onClick={() => (location.href = "/")}
      >
        new game
      </button>
    </dialog>
  );
}
