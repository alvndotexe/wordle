import { Signal } from "@preact/signals";
import { Leader } from "./GameState.ts";
import { Player } from "./Players.ts";

export type ExtractSignal<T> = T extends Signal<infer U> ? U : never;
export type MessageType =
  | "gameOptions"
  | "attempt"
  | "complete"
  | "verifyClient"
  | "newLeader"
  | "existingPlayer"
  | "newPlayer"
  | "finished";

export type FilterUnion<U, S extends string> = U extends { messageType: S }
  ? U
  : never;

export type Messages =
  | gameOptionsMessage
  | AttemptMessage
  | completeMessage
  | VerifyClientMessage
  | NewLeaderMessage
  | ExistingPlayerMessage
  | NewPlayerMessage
  | FinishedMessage;

export type ExistingPlayerMessage = {
  messageType: "existingPlayer";
  clientID: string;
  attempts: string[];
  gameID: string;
};

export type NewPlayerMessage = {
  messageType: "newPlayer";
};

export type VerifyClientMessage = {
  messageType: "verifyClient";
  clientID: string;
};

export type NewLeaderMessage = {
  leader: Leader | undefined;
  messageType: "newLeader";
};

export type gameOptionsMessage = {
  messageType: "gameOptions";
  playerType: "existing" | "new";
  leader: Leader | undefined;
  solution: string;
  words: string[];
  clientID: string;
  gameID: string;
};

export type AttemptMessage = {
  messageType: "attempt";
  attempts: string[];
  clientID: string;
};

export type completeMessage = {
  messageType: "complete";
  clientID: string;
  attempts: string[];
};

export type FinishedMessage = {
  messageType: "finished";
  winner: Leader | undefined;
};
