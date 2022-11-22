import { useEffect, useRef } from "preact/compat";
import { Player, useGameStore } from "../hooks/GameState.ts";
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
  opponents,
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
    <dialog class="flex flex-col" ref={dialogRef}>
      <button
        class="bg-green-400 rounded-sm p-2"
        onClick={() => (location.href = "/")}
      >
        new game
      </button>
    </dialog>
  );
}
