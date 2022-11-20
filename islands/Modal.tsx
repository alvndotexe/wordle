import { useEffect, useRef } from "preact/compat";
import { GameState } from "../hooks/GameState.ts";

function EndDialog({ state }: { state: GameState }) {
  const attempts = state.currentAttempt.value;
  const endingMessage = !state.attempts.value.includes(state.solution.value)
    ? "next time"
    : attempts == 1
    ? "genius"
    : attempts == 2
    ? "magnificent"
    : attempts == 3
    ? "impressive"
    : attempts == 4
    ? "splendid"
    : attempts == 5
    ? "great"
    : "phew";
  return (
    <>
      <p>{endingMessage}</p>
      <button onClick={() => (location.href = "/")}>new game</button>
    </>
  );
}

function EndMessage({ state }: { state: GameState }) {
  if (state.hasWon.value === undefined)
    return <div>waiting for confirmation</div>;
  return (
    <div>{state.hasWon.value ? "congrats you won" : "hold this L bro"}</div>
  );
}

export default function Modal({
  isOpen,
  state,
}: {
  isOpen: boolean;
  state: GameState;
}) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  useEffect(() => {
    if (isOpen) dialogRef.current?.showModal();
    else dialogRef.current?.close();
  }, [isOpen]);
  return (
    <dialog ref={dialogRef}>
      <EndDialog state={state} />
      <EndMessage state={state} />
    </dialog>
  );
}
