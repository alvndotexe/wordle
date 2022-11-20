import { Head } from "https://deno.land/x/fresh@1.1.2/runtime.ts";
import { HandlerContext } from "https://deno.land/x/fresh@1.1.2/server.ts";
import { findGame } from "../hooks/Database.ts";
import GameBoard from "../islands/Wordle.tsx";

export async function handler(req: Request, ctx: HandlerContext) {
  const gameID = new URL(req.url).pathname.replace("/", "");
  const result = await findGame(gameID);
  if (!result) return ctx.renderNotFound();
  return ctx.render();
}

export default function Game() {
  return (
    <>
      <Head>
        <title>Wordle</title>
      </Head>
      <body className="h-[100vh] w-full flex flex-col">
        <nav class="bg-gray-300 w-full flex-grow-0 border-b-1 border-gray-400">
          hello Wordle
        </nav>
        <main class="flex-grow-1 grid place-items-center">
          <GameBoard />
        </main>
        <div id="portal"></div>
      </body>
    </>
  );
}
