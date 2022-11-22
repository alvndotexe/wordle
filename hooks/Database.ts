import { PrismaClient } from "../generated/client/deno/edge.ts";
import { config } from "https://deno.land/x/dotenv@v3.2.0/mod.ts";

const env = config();

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: Deno.env.get("DATABASE_URL") ?? env.DATABASE_URL,
    },
  },
});

export function findSoloution(game_id: string) {
  return prisma.games.findUnique({
    select: { solution: true },
    where: { game_id },
  });
}

export function findPlayer(player_id: string, game_id: string) {
  return prisma.players.findMany({
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
  return prisma.players.create({
    data: {
      player_id,
      game_id,
    },
  });
}

export function findGame(game_id: string) {
  return prisma.games.findUnique({
    select: { game_id: true, solution: true },
    where: {
      game_id: game_id,
    },
  });
}

export function newGame(solution: string) {
  return prisma.games.create({
    data: {
      game_id: crypto.randomUUID(),
      solution: solution,
    },
  });
}

export function deleteGame(game_id: string) {
  return prisma.games.delete({
    where: { game_id },
  });
}
