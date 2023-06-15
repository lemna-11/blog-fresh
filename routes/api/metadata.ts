import { Handlers } from "$fresh/server.ts";
import { getAllMDMeta, metadata } from "../../utils/Markdown.ts";

export const handler: Handlers<metadata[]> = {
  async GET(_req, _ctx) {
    const posts = await getAllMDMeta();
    return Response.json(posts);
  },
};
