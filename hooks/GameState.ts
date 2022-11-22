import { batch, computed, signal, Signal } from "@preact/signals";
import { boolean } from "https://deno.land/x/zod@v3.19.1/types.ts";
import { StoredGameData } from "../islands/Wordle.tsx";

export type Player = {
  clientID: string;
  attempts: string[];
};

export type GameOptions = {
  attempts: string[];
  clientID: string;
  words: string[];
  solution: string;
};

export type GameState = {
  gameOptions: Signal<GameOptions>;
  input: Signal<string>;
  otherPlayers: Signal<Player[]>;
  isLoading: Signal<boolean>;
};

export function useGameStore(initialStoreState: () => StoredGameData) {
  const storedData = initialStoreState();
  const storeState: GameState = {
    gameOptions: signal({
      attempts: storedData.attempts,
      clientID: storedData.clientID,
      solution: "",
      words: new Array<string>(),
    }),
    input: signal(""),
    otherPlayers: signal(new Array<Player>()),
    isLoading: signal(true),
  };
  function addAttempt(attempt: string) {
    if (
      attempt.length == 5 &&
      storeState.gameOptions.value.attempts.length < 6 &&
      storeState.gameOptions.value.words.includes(attempt)
    ) {
      storeState.gameOptions.value = {
        ...storeState.gameOptions.value,
        attempts: [...storeState.gameOptions.value.attempts, attempt],
      };
      storeState.input.value = "";
      return true;
    }
    return false;
  }

  function forceGameFinish() {
    const leftovers = new Array(
      6 - storeState.gameOptions.value.attempts.length
    ).fill("");
    storeState.gameOptions.value = {
      ...storeState.gameOptions.value,
      attempts: storeState.gameOptions.value.attempts.concat(leftovers),
    };
  }

  function updateOpponents(otherPlayers: Player[]) {
    storeState.otherPlayers.value = otherPlayers;
  }

  function removeCharFromInput() {
    if (storeState.input.value.length > 0) {
      storeState.input.value = storeState.input.value.slice(0, -1);
      return true;
    }
    return false;
  }

  function addCharToInput(key: string) {
    const charCode = key.charCodeAt(0);
    const char =
      charCode < 65
        ? null
        : charCode <= 90
        ? String.fromCharCode(charCode + 32)
        : charCode < 97
        ? null
        : charCode > 122
        ? null
        : key;
    if (char && (storeState.input.value + char).length <= 5) {
      storeState.input.value += char;
      return true;
    }
    return false;
  }

  function forceReset(payload: Partial<GameOptions & { opponents: Player[] }>) {
    const { opponents, ...rest } = payload;
    batch(() => {
      if (opponents) storeState.otherPlayers.value = opponents;
      storeState.gameOptions.value = {
        ...storeState.gameOptions.value,
        ...rest,
      };
      storeState.isLoading.value = false;
    });
  }

  return {
    game: computed(() => storeState.gameOptions.value),
    opponents: computed(() => storeState.otherPlayers.value),
    currentInput: computed(() => storeState.input.value),
    attempts: computed(() => storeState.gameOptions.value.attempts.length),
    solution: computed(() => storeState.gameOptions.value.solution),
    isLoading: computed(() => storeState.isLoading.value),
    isComplete: computed(() => {
      return (
        storeState.gameOptions.value.attempts.length === 6 ||
        storeState.otherPlayers.value
          .flatMap((p) => p.attempts)
          .includes(storeState.gameOptions.value.solution)
      );
    }),
    removeCharFromInput,
    addAttempt,
    addCharToInput,
    forceGameFinish,
    forceReset,
    updateOpponents,
  };
}

export function useInputHandlers(state: ReturnType<typeof useGameStore>) {
  const { addAttempt, currentInput, removeCharFromInput, addCharToInput } =
    state;
  return {
    onEnterKeyPress(onSuccess: () => void, onFailure: () => void) {
      if (addAttempt(currentInput.value)) onSuccess();
      else onFailure();
    },
    onKeyPress(key: string, onFailure: () => void) {
      if (!addCharToInput(key)) onFailure();
    },
    //updateinput,onfail do something
    onBackspaceKeyPress(onFailure: () => void) {
      if (!removeCharFromInput()) onFailure();
    },
  };
}
