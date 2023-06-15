import { tw } from "twind";
import { metadata } from "../utils/Markdown.ts";
import IconFileDots from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/file-dots.tsx";
import IconArticle from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/article.tsx";

export default function Sidebar(props: { data: metadata[] }) {
  return (
    <div
      class={tw`
            flex flex-col px-6 py-4
            space-y-3
            h-full w-32`}
    >
      {props.data.map((dp, index) => (
        <a href={`/${dp.filename}`}>
          <button class={tw`rounded shadow-lg  p-2 truncate hover:text-clip`}>
            <div class={tw`flex space-x-2 max-w-32`}>
              {index % 2 === 0 ? <IconArticle /> : <IconFileDots />}
              <h3 class={tw`truncate max-w-none`}>{dp.title} by {dp.author}</h3>
            </div>
            <h5>{dp.date ? dp.date.toDateString() : "Missing metadata"}</h5>
          </button>
        </a>
      ))}
    </div>
  );
}
