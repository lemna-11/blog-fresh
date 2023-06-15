import { Head } from "$fresh/runtime.ts";
import { Header } from "./Header.tsx";
import { tw } from "twind";
import { Footer } from "./Footer.tsx";
import Sidebar from "../islands/Sidebar.tsx";

type Props = { title: string; route: string; };

export function Base(props: Props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <div class={tw`flex flex-col h-screen justify-between`}>
        <Header currentroute={props.route} />
        <div class={tw`flex flex-grow`}>
          <Sidebar />
        </div>
        <Footer />
      </div>
    </>
  );
}
