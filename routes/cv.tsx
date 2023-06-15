import { Head } from "$fresh/runtime.ts";
import { tw } from "twind";
import { Footer } from "../components/Footer.tsx";
import { Header } from "../components/Header.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>CV Mano Lemmens</title>
      </Head>
      <div class={tw`flex flex-col h-screen justify-between`}>
        <Header currentroute="/cv" />
        <div class={tw`flex flex-grow`}>
        </div>
        <Footer />
      </div>
    </>
  );
}
