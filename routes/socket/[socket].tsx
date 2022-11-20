import {
  FinishedMessage,
  gameOptionsMessage,
  NewLeaderMessage,
} from "@/hooks/MessageTypes.ts";
import { SocketWrapper } from "@/hooks/SocketWrapper.ts";
import { acceptable } from "https://deno.land/x/abc@v1.3.3/vendor/https/deno.land/std/ws/mod.ts";
import { HandlerContext } from "https://deno.land/x/rutt@0.0.13/mod.ts";
import { findGame } from "../../hooks/Database.ts";
import { GameServer } from "../../hooks/GameServer.ts";
import { Player } from "../../hooks/Players.ts";

const words = await Deno.readTextFile("assets/words.txt").then((words) =>
  words.split(/\r?\n/)
);
const games = new Map<string, GameServer>();

export async function handler(req: Request, ctx: HandlerContext) {
  const gameID = new URL(req.url).pathname.replace("/socket/", "");
  const data = await findGame(gameID);
  if (data === null) return;
  const game = games.has(gameID)
    ? games.get(gameID)!
    : new GameServer(data.solution!, data.game_id);
  games.set(gameID, game);
  if (acceptable(req)) {
    let player: Player;
    const { socket, response } = Deno.upgradeWebSocket(req);
    const playerSocket = new SocketWrapper(socket)
      .on("existingPlayer", (m) => {
        player = new Player(m.clientID, socket);
        game.addPlayer(player);
        const message: gameOptionsMessage = {
          playerType: "existing",
          messageType: "gameOptions",
          clientID: player.playerID,
          leader: game.getLeader(),
          gameID,
          solution: game.getSolution(),
          words,
        };
        socket.send(JSON.stringify(message));
      })
      .on("newPlayer", (m) => {
        player = new Player(crypto.randomUUID(), socket);
        const message: gameOptionsMessage = {
          playerType: "new",
          messageType: "gameOptions",
          clientID: player.playerID,
          leader: game.getLeader(),
          gameID,
          solution: game.getSolution(),
          words,
        };
        socket.send(JSON.stringify(message));
        game.addPlayer(player);
      })
      .on("attempt", (messageBody) => {
        console.log({
          game: gameID,
          player: player.playerID,
          messageBody,
          players: game.getPlayers().map((p) => p.playerID),
        });
        player.addAttempt(messageBody.attempts);
        const message: NewLeaderMessage = {
          messageType: "newLeader",
          leader: game.getLeader(),
        };
        game.announce("newLeader", message);
      })
      .on("verifyClient", (messageBody) => {
        const potentialPlayer = game.getPlayer(messageBody.clientID);
        if (potentialPlayer) player = potentialPlayer;
        else game.addPlayer(new Player(messageBody.clientID, playerSocket));
      })
      .on("complete", (messageBody) => {
        console.log("complete");
        const allPlayersFinished = game
          .getPlayers()
          .every((p) => p.isFinished.value);
        const winner = game.winner.value;
        if (winner !== undefined || allPlayersFinished) {
          console.log(
            game.getSolution(),
            winner?.playerID,
            game.getPlayers().map((p) => p.playerID)
          );

          const message: FinishedMessage = {
            messageType: "finished",
            winner: winner
              ? { attempts: winner.attempts.value, clientID: winner.playerID }
              : undefined,
          };
          game
            .announce("finished", message)
            .then(() => games.delete(game.getID()))
            .then(() => socket.close());
        }
      })
      .onClose(() => {
        if (player) {
          game.removePlayer(player);
        }
      })
      .build();
    return response;
  }
}
