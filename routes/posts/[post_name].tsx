import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { tw } from "twind";
import { Footer } from "../../components/Footer.tsx";
import { Header } from "../../components/Header.tsx";
import { getAllMDMeta, metadata, parseMD, post } from "../../utils/Markdown.ts";
import Sidebar from "../../components/PostSidebar.tsx";
import { Post } from "../../components/Post.tsx";

export const handler: Handlers<{sidebar: metadata[], post: post}> = {
  async GET(_, ctx) {
    const meta = getAllMDMeta();
    const post = parseMD(`${ctx.params.post_name}.md`)
    return ctx.render({sidebar: await meta, post: await post});
  },
};

export default function Home(props: PageProps<{sidebar: metadata[], post: post}>) {
  return (
    <>
      <Head>
        <title>Blog Mano Lemmens</title>
      </Head>
      <div class={tw`flex flex-col h-screen justify-between`}>
        <Header currentroute="/posts" />
        <div class={tw`flex flex-grow`}>
          <Sidebar data={props.data.sidebar} />
          <Post post={props.data.post}/>
        </div>
        <Footer />
      </div>
    </>
  );
}