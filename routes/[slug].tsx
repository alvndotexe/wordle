import { Head } from "https://deno.land/x/fresh@1.1.2/runtime.ts";
import { HandlerContext } from "https://deno.land/x/fresh@1.1.2/server.ts";
import { findGame } from "../hooks/Database.ts";
import Share from "../islands/Share.tsx";

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
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <body className="h-[100vh] w-full flex flex-col dark:bg-black">
        <nav class="flex justify-between bg-gray-300 dark:bg-gray-700 w-full flex-grow-0 border-b-1 border-gray-400 dark:border-gray-900 px-2 py-1">
          <p class="dark:text-white font-bold text-xl">hello worlde</p>
          <Share />
        </nav>
        <main class="flex-grow-1 grid place-items-center">
          <GameBoard />
        </main>
        <div id="portal"></div>
      </body>
    </>
  );
}
