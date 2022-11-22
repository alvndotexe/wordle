import { Signal } from "@preact/signals";
import { Player } from "./GameState.ts";

export type ExtractSignal<T> = T extends Signal<infer U> ? U : never;
export type MessageType =
  | "attempt"
  | "complete"
  | "updatedLeaders"
  | "clientConnectionRequest"
  | "clientConnectionResponse"
  | "newGameRequest"
  | "finished";

export type FilterUnion<U, S extends string> = U extends { messageType: S }
  ? U
  : never;

export type Messages =
  | AttemptMessage
  | completeMessage
  | ConnectClientRequest
  | ConnectClientResponse
  | UpdateLeadersMessage
  | FinishedMessage;

export type ConnectClientRequest = {
  messageType: "clientConnectionRequest";
  clientID: string;
};

export type NewGameRequest = {
  messageType: "newGameRequest";
};

export type ConnectClientResponse = {
  messageType: "clientConnectionResponse";
  opponents: Player[];
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

export type UpdateLeadersMessage = {
  messageType: "updatedLeaders";
  opponents: Player[];
};

export type completeMessage = {
  messageType: "complete";
  clientID: string;
  attempts: string[];
};

export type FinishedMessage = {
  messageType: "finished";
  winner: Player | null;
};
