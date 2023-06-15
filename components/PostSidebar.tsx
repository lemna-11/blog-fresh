import { tw } from "twind";
import { metadata } from "../utils/Markdown.ts";
import IconArticleFilledFilled from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/article-filled-filled.tsx"
import IconArticle from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/article.tsx"

export default function Sidebar(props: {data: metadata[]}) {
  return (
    <div
      class={tw`
            flex-col px-8 py-6
            h-full w-fit`}
    >
      {props.data.map((dp, index) => (
        <a href={`/${dp.title}`}>
          <div class={tw`flex space-x-2`}>
            {index % 2 === 0 ? (<IconArticle/>) : (<IconArticleFilledFilled/>)}
            <h3>{dp.title} by {dp.author}</h3>
          </div>
          <h5>{dp.date ? dp.date.toDateString() : "Missing metadata"}</h5>
        </a>
      ))}
    </div>
  );
}
