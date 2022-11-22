import { computed, signal, Signal } from "@preact/signals";
import { FilterUnion, Messages, MessageType } from "./MessageTypes.ts";

export class Player {
  playerID: string;
  attempts: Signal<string[]>;
  socket: WebSocket;

  constructor(playerID: string, socket: WebSocket) {
    this.playerID = playerID;
    this.attempts = signal(new Array<string>());
    this.socket = socket;
  }

  isFinished = computed(() => this.attempts.value.length === 6);

  addAttempt(attempts: string[]) {
    this.attempts.value = attempts;
  }

  sendMessage<M extends MessageType>(
    messageType: M,
    message: Omit<FilterUnion<Messages, M>, "messageType">
  ) {
    if (this.socket.readyState === 1)
      this.socket.send(JSON.stringify({ messageType, ...message }));
  }

  bestAttempt(solution: string) {
    if (this.attempts.value.length === 0) return 0;
    return this.attempts.value.reduce((acc, currentAttempt) => {
      const currentAttemptCount = currentAttempt
        .split("")
        .reduce(
          (acc, currLetter) => (solution.includes(currLetter) ? acc + 1 : acc),
          0
        );
      return acc > currentAttemptCount ? acc : currentAttemptCount;
    }, 0);
  }
}
