import { Head } from "$fresh/runtime.ts";
import { tw } from "twind";
import { Footer } from "../components/Footer.tsx";
import { Header } from "../components/Header.tsx";
import { Introduction } from "../components/Introduction.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mano Lemmens</title>
      </Head>
      <div class={tw`flex flex-col h-screen justify-between`}>
        <Header currentroute="/" />
        <div class={tw`flex flex-grow`}>
          <Introduction />
        </div>
        <Footer />
      </div>
    </>
  );
}
