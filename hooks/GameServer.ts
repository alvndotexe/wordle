import { computed, signal, Signal } from "@preact/signals";
import { Leader } from "./GameState.ts";
import { FilterUnion, Messages, MessageType } from "./MessageTypes.ts";
import { Player } from "./Players.ts";

const getAttemptScore = (player: Player, solution: string) => {
  return player.attempts.value.map((attempt) =>
    attempt
      .split("")
      .reduce((acc, curr) => (solution.includes(curr) ? acc + 1 : acc), 0)
  );
};

export class GameServer {
  #players: Array<Player>;
  #solution: string;
  #gameID: string;
  constructor(solution: string, gameID: string) {
    this.#players = new Array<Player>();
    this.#solution = solution;
    this.#gameID = gameID;
  }
  announce<M extends MessageType>(
    messageType: M,
    message: FilterUnion<Messages, M>
  ) {
    return new Promise((resolve, reject) => {
      try {
        for (const player of this.#players) {
          player.sendMessage(messageType, message);
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
    if (this.#players.some((p) => p.playerID === player.playerID))
      return new Error("player already exists");
    return this.#players.push(player);
  }

  getPlayer(playerID: string) {
    return this.#players.filter((p) => p.playerID === playerID)[0];
  }

  getSolution() {
    return this.#solution;
  }

  removePlayer(player: Player) {
    this.#players = this.#players.filter((p) => p.playerID !== player.playerID);
  }

  getLeader(): Leader | undefined {
    if (!this.#solution || this.#players.length === 0) return undefined;
    const solution = this.#solution;
    const result = this.#players.reduce((acc, curr) => {
      return getAttemptScore(curr, solution) > getAttemptScore(acc, solution)
        ? curr
        : acc;
    });
    return { clientID: result.playerID, attempts: result.attempts.value };
  }

  winner = computed(() => {
    if (!this.#solution || this.#players.length === 0) return undefined;
    const solution = this.#solution;
    if (this.#players.some((p) => p.attempts.value.includes(solution))) {
      return this.#players.filter((p) =>
        p.attempts.value.includes(this.#solution!)
      )[0];
    }
  });

  iscomplete = computed(() => {
    if (!this.winner.value)
      return this.#players.every((p) => p.attempts.value.length === 6);
  });
}

export class GameManager {
  #games: Array<GameServer>;
  constructor() {
    this.#games = new Array();
  }

  addGame(game: GameServer) {
    if (!this.#games.some((game) => game.getID())) this.#games.push(game);
  }

  removeGame(game: GameServer) {
    if (this.#games.some((g) => g.getID()))
      this.#games = this.#games.filter((g) => g.getID() === game.getID());
  }

  getGame(gameID: string) {
    this.#games.filter((g) => g.getID() === gameID);
  }
}
