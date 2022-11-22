import { computed, signal, Signal } from "@preact/signals";
import { FilterUnion, Messages, MessageType } from "./MessageTypes.ts";
import { Player } from "./Players.ts";

export class GameServer {
  #players: Map<string, Player>;
  #solution: string;
  #gameID: string;
  constructor(solution: string, gameID: string) {
    this.#players = new Map();
    this.#solution = solution;
    this.#gameID = gameID;
  }
  announce<M extends MessageType>(
    messageType: M,
    message: Omit<FilterUnion<Messages, M>, "messageType">,
    playerID?: string
  ) {
    return new Promise((resolve, reject) => {
      try {
        for (const [_, player] of this.#players.entries()) {
          if (player.playerID !== playerID) {
            player.sendMessage(messageType, message);
          }
        }
        resolve(true);
      } catch (e) {
        reject(e);
      }
    });
  }

  getID() {
    return this.#gameID;
  }

  getPlayers() {
    return this.#players;
  }

  addPlayer(player: Player) {
    this.#players.set(player.playerID, player);
  }

  getPlayer(playerID: string) {
    return this.#players.get(playerID);
  }

  getSolution() {
    return this.#solution;
  }

  removePlayer(player: Player) {
    this.#players.delete(player.playerID);
  }

  getTopPlayers() {
    return [...this.#players.entries()]
      .map(([_id, player]) => player)
      .sort(
        (a, b) => b.bestAttempt(this.#solution) - a.bestAttempt(this.#solution)
      )
      .slice(0, 2);
  }

  iscomplete = computed(() => {
    return [...this.#players.entries()].every(
      ([_id, player]) => player.isFinished.value
    );
  });
}
