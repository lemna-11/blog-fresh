import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { tw } from "twind";
import { Footer } from "../components/Footer.tsx";
import { Header } from "../components/Header.tsx";
import { metadata,getAllMDMeta } from "../utils/Markdown.ts";
import Sidebar from "../components/PostSidebar.tsx";

export const handler: Handlers<metadata[]> = {
  async GET(_, ctx){
    const meta = await getAllMDMeta()
    return ctx.render(meta)
  }
}

export default function Home({ data }: PageProps<metadata[]>) {
  return (
    <>
      <Head>
        <title>Portfolio Mano Lemmens</title>
      </Head>
      <div class={tw`flex flex-col h-screen justify-between`}>
        <Header currentroute="/posts" />
        <div class={tw`flex flex-grow`}>
          <Sidebar data={data}/>
        </div>
        <Footer />
      </div>
    </>
  );
}
