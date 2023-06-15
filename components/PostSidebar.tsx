import { tw } from "twind";
import { metadata } from "../utils/Markdown.ts";
import IconArticleFilledFilled from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/article-filled-filled.tsx"
import IconArticle from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/article.tsx"

export default function Sidebar(props: {data: metadata[]}) {
  return (
    <div
      class={tw`
            flex flex-col px-6 py-4
            space-y-3
            h-full w-fit`}
    >
      {props.data.map((dp, index) => (
        <a href={`/${dp.filename}`}>
          <button class={tw`rounded shadow-lg p-2`}>
            <div class={tw`flex space-x-2 `}>
              {index % 2 === 0 ? (<IconArticle/>) : (<IconArticleFilledFilled/>)}
              <h3>{dp.title} by {dp.author}</h3>
            </div>
            <h5>{dp.date ? dp.date.toDateString() : "Missing metadata"}</h5>
          </button>
        </a>
      ))}
    </div>
  );
}
