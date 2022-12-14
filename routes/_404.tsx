import { UnknownPageProps } from "$fresh/server.ts";
import { Head } from "https://deno.land/x/fresh@1.1.2/runtime.ts";

export default function NotFoundPage({ url }: UnknownPageProps) {
  return (
    <>
      <Head>
        <title>404</title>
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <body class="grid place-items-center w-full h-[100vh] dark:bg-black">
        <main class="w-full h-full grid place-items-center">
          <article class="m-4">
            <div class="grid grid-cols-3 w-full gap-4">
              {[4, 0, 4].map((e) => (
                <section
                  style={{ aspectRatio: "1/1" }}
                  className="grid place-items-center font-bold text-8xl text-white bg-yellow-500 text-center rounded-lg"
                >
                  <p class="max-w-min">{e}</p>
                </section>
              ))}
            </div>
            <p class="text-2xl py-2 dark:text-white">
              hmm. the game your looking for doesnt exist
            </p>
            <a
              href="/"
              class="rounded-md bg-green-500 hover:bg-green-300 text-white text-xl p-2"
              onClick={() => (location.href = "/")}
            >
              New Game
            </a>
          </article>
        </main>
      </body>
    </>
  );
}
