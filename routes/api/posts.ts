import { Handlers } from "$fresh/server.ts";
import { parseMD, post } from "../../utils/Markdown.ts";

export const handler: Handlers<post> = {
  async GET(req, ctx) {
    const u = new URL(req.url);
    const postname = u.searchParams.get("post_name");
    if (postname === null) {
      return Response.error();
    }
    // sort of dangerous btw
    // lets people read any file
    // on my filesystem
    return ctx.render(await parseMD(postname));
  },
};
