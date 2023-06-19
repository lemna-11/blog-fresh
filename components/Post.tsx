import { apply, tw } from "twind";
import { post } from "../utils/Markdown.ts";
import { style } from "../utils/Styling.ts"

export function Post(props: { post: post }) {
  const why = { __html: props.post.content };

  return <div dangerouslySetInnerHTML={why} class={tw`w-full p-4${apply(style)}`}></div>;
}
