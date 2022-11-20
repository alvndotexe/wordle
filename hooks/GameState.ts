import { computed, ReadonlySignal, signal, Signal } from "@preact/signals";
import { StoredGameData } from "../islands/Wordle.tsx";

//TODO db autodeletes old unused games

export type GameOptions = {
  clientID: string;
  solution: string;
  gameID: string;
  words: string[];
};

export type Leader = {
  clientID: string;
  attempts: string[];
};

export class GameState {
  leader: Signal<Leader>;
  #gameOptions: Signal<GameOptions>;
  attempts: Signal<Array<string>>;
  #input: Signal<string>;
  previousLeaders: Signal<Array<string>>;
  hasWon: Signal<undefined | boolean>;

  constructor(gameOptions: Signal<GameOptions>) {
    this.#gameOptions = gameOptions;
    this.attempts = signal(new Array<string>());
    this.#input = signal("");
    this.leader = signal({
      clientID: "",
      attempts: [],
    });
    this.previousLeaders = signal(new Array<string>());
    this.hasWon = signal(undefined);
  }
  currentInput = computed(() => this.#input.value);
  currentAttempt = computed(() => this.attempts.value.length);
  solution = computed(() => this.#gameOptions.value.solution);
  isComplete = computed(() => {
    const hasSolution = this.attempts.value.includes(
      this.#gameOptions.value.solution
    );
    const isOutOfAttempts = this.attempts.value.length === 6;
    return hasSolution || isOutOfAttempts;
  });

  addLeader(leader: Leader) {
    if (this.previousLeaders.value.includes(leader.clientID)) {
      this.previousLeaders.value = [
        ...this.previousLeaders.value,
        leader.clientID,
      ];
    }
  }

  loadPreviousAttempts(prevData: StoredGameData) {
    this.attempts.value = prevData.attempts;
  }

  addAttempt(attempt: string) {
    if (this.#gameOptions.value.words.includes(attempt)) {
      this.attempts.value = [...this.attempts.value, attempt];
      this.#input.value = "";
      return true;
    }
    return false;
  }

  onKeyPress(key: string) {
    //TODO make simpler
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
    if (char && (this.#input.value + char).length <= 5) {
      this.#input.value += char;
    }
  }

  onBackspaceKeyPress() {
    this.#input.value = this.#input.value.slice(0, -1);
  }

  onEnterKeyPress({
    onSuccess,
    onFailure,
  }: {
    onSuccess: () => void;
    onFailure: () => void;
  }) {
    if (
      this.#input.value.length === 5 &&
      this.attempts.value.length < 6 &&
      this.addAttempt(this.#input.value)
    ) {
      onSuccess();
    } else onFailure();
  }
  forceGameFinish() {
    const leftovers = new Array(6 - this.attempts.value.length).fill("");
    this.attempts.value = this.attempts.value.concat(leftovers);
  }
}
