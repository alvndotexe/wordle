import { PrismaClient } from "../generated/client/deno/edge.ts";
import { config } from "https://deno.land/std@0.167.0/dotenv/mod.ts";

const url = await config().then((c) => c["DATABASE_URL"]);

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: Deno.env.get("DATABASE_URL") ?? url,
    },
  },
});

export function findSoloution(game_id: string) {
  return prisma.game.findUnique({
    select: { solution: true },
    where: { game_id },
  });
}

export function findPlayer(player_id: string, game_id: string) {
  return prisma.game_Players.findMany({
    select: {
      game_id: true,
    },
    where: {
      player_id,
      game_id,
    },
  });
}

export function addPlayer(player_id: string, game_id: string) {
  return prisma.game_Players.create({
    data: {
      player_id,
      game_id,
    },
  });
}
export function findGame(game_id: string) {
  return prisma.game.findUnique({
    select: { game_id: true, solution: true },
    where: {
      game_id: game_id,
    },
  });
}

export function newGame(solution: string) {
  return prisma.game.create({
    data: {
      game_id: crypto.randomUUID(),
      solution: solution,
    },
  });
}

export function deleteGame(game_id: string) {
  return prisma.game.delete({
    where: { game_id },
  });
}
