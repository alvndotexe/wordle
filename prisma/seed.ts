import { PrismaClient } from "../generated/client/deno/edge.ts";
import { config } from "https://deno.land/std@0.167.0/dotenv/mod.ts";

const url = await config().then((c) => c["DATABASE_URL"]);

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: url,
    },
  },
});

Deno.readTextFile("assets/words.txt")
  .then((words) => words.split(/\r?\n/))
  .then(async (words) => {
    for await (const w of words) {
      const word = await prisma.word.create({
        data: { word_id: w },
      });
      console.log(word);
    }
  })
  .then(() => prisma.$disconnect());
