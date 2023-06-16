import { tw } from "twind";
import { metadata } from "../utils/Markdown.ts";

export default function PostSidebar(props: { data: metadata[] }) {
  return (
    <div
      class={tw`
            flex flex-col px-6 py-4
            space-y-3
            h-full w-64`}
    >
      {props.data.map(dp => (
        <a href={`/posts/${dp.filename}`}>
          <button class={tw`rounded shadow-lg p-2 w-full hover:bg-yellow-50 hover:shadow-yellow-900`}>
            <p>{dp.title} </p>
            <p>by {dp.author}</p>
            <p>{dp.date ? dp.date.toDateString() : "Missing metadata"}</p>
          </button>
        </a>
      ))}
    </div>
  );
}
