import { apply, tw } from "twind";
import { css } from "twind/css"
import { post } from "../utils/Markdown.ts";

export function Post(props: { post: post }) {
  const why = { __html: props.post.content };

  // I dont like this
  // but I don't know 
  // how else I can do this
  const style = css({
    '& > h1' : {
      fontSize: '1.5em',
      fontWeight: 'bold',
      marginLeft: '0.2rem'
    },

    '& > h2' : {
      fontSize: '1.25em',
      fontWeight: 'bold',
      marginLeft: '0.5rem'
    },

    '& > h3' : {
      fontSize: '1.1em',
      fontWeight: 'bold',
      marginLeft: '0.75rem'
    },

    '& > p' : { 
      margin: '1rem'
    }
  })

  return <div dangerouslySetInnerHTML={why} class={tw`w-full p-4${apply(style)}`}></div>;
}
