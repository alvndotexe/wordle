import { ConnectClientResponse } from "@/hooks/MessageTypes.ts";
import { SocketWrapper } from "@/hooks/SocketWrapper.ts";
import { validate } from "https://deno.land/std@0.165.0/uuid/v4.ts";
import { acceptable } from "https://deno.land/x/abc@v1.3.3/vendor/https/deno.land/std/ws/mod.ts";
import { HandlerContext } from "https://deno.land/x/rutt@0.0.13/mod.ts";
import { deleteGame, findGame } from "../../hooks/Database.ts";
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
    new SocketWrapper(socket)
      .on("clientConnectionRequest", (m) => {
        player = new Player(
          validate(m.clientID) ? m.clientID : crypto.randomUUID(),
          socket
        );
        game.addPlayer(player);
        console.log({
          others: game
            .getTopPlayers()
            .map((p) => ({ attempts: p.attempts.value, clientID: p.playerID })),
        });
        const message: ConnectClientResponse = {
          messageType: "clientConnectionResponse",
          clientID: player.playerID,
          opponents: game
            .getTopPlayers()
            .map((p) => ({ attempts: p.attempts.value, clientID: p.playerID })),
          gameID,
          solution: game.getSolution(),
          words,
        };
        socket.send(JSON.stringify(message));
      })
      .on("attempt", (m) => {
        player.addAttempt(m.attempts);
        game
          .announce(
            "updatedLeaders",
            {
              opponents: game.getTopPlayers().map((p) => ({
                attempts: p.attempts.value,
                clientID: p.playerID,
              })),
            },
            player.playerID
          )
          .catch((e) => console.log(e));
      })
      .on("complete", (_, socket) => {
        if (
          player.attempts.value.includes(game.getSolution()) ||
          [...game.getPlayers().entries()].every(([_, p]) => p.isFinished.value)
        ) {
          const topPlayer = game.getTopPlayers()[0];
          const winner = player.attempts.value.includes(game.getSolution())
            ? { clientID: player.playerID, attempts: player.attempts.value }
            : {
                clientID: topPlayer.playerID,
                attempts: topPlayer.attempts.value,
              };
          game
            .announce("finished", {
              winner: winner,
            })
            .then(() => deleteGame(gameID))
            .then(() => socket.close)
            .then(() => games.delete(gameID));
        }
      })
      .onClose(() => {
        if (player) {
          game.removePlayer(player);
        }
      });
    return response;
  }
}
