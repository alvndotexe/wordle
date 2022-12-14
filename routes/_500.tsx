import { ErrorPageProps } from "$fresh/server.ts";
import { Head } from "https://deno.land/x/fresh@1.1.2/runtime.ts";

//return <p>500 internal error: {(error as Error).message}</p>;

export default function Error500Page({ url }: ErrorPageProps) {
  return (
    <>
      <Head>
        <title>500</title>
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <body class="grid place-items-center w-full h-[100vh] dark:bg-black">
        <main class="w-full h-full grid place-items-center">
          <article class="m-2">
            <div class="grid grid-cols-3 w-full gap-4">
              {[5, 0, 0].map((e) => (
                <section
                  style={{ aspectRatio: "1/1" }}
                  className="grid place-items-center font-bold text-8xl text-white bg-red-700 text-center rounded-lg"
                >
                  <p class="max-w-min">{e}</p>
                </section>
              ))}
            </div>
            <p class="text-2xl p-2 dark:text-white">
              oops something went wrong
            </p>
            <div class="flex gap-2">
              <a class="bg-yellow-500 rounded-md p-2 ">Refresh</a>
              <a
                href="/"
                class="rounded-md bg-green-400 px-1 text-white text-xl px-2 py-2"
              >
                New Game
              </a>
            </div>
          </article>
        </main>
      </body>
    </>
  );
}
