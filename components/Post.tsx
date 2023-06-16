import { tw } from "https://esm.sh/twind@0.16.19";
import { post  } from "../utils/Markdown.ts";

export function Post(props: { post: post}){
    const why = { __html: props.post.content}
    return <div dangerouslySetInnerHTML={why} class={tw`w-32 p-4`}></div>
}