import { Handlers } from "https://deno.land/x/fresh@1.1.2/server.ts";
import { newGame } from "../hooks/Database.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    const { game_id } = await newGame();
    if (!game_id) ctx.renderNotFound();
    //TODO fix 500 error page
    return new Response("", {
      status: 307,
      headers: { location: game_id },
    });
  },
};
