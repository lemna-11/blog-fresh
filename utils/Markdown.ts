import { Marked } from "https://raw.githubusercontent.com/ubersl0th/markdown/master/mod.ts";

export type metadata = {
  title: string;
  author: string;
  filename: string;
  description?: string;
  date: Date;
};
const emptyMetadata: metadata = {
  title: "",
  author: "",
  filename: "",
  description: "",
  date: new Date(),
};

export type post = {
  meta: metadata;
  content: string;
};
const _emptyPost: post = {
  meta: emptyMetadata,
  content: "",
};

export async function parseMD(
  name: string,
): Promise<post> {
  const md = Marked.parse(await Deno.readTextFile(`./posts/${name}`));
  const meta = JSON.parse(JSON.stringify(emptyMetadata));
  meta.filename = name.substring(0, name.indexOf(".md"));
  // ugly but works ¯\_(ツ)_/¯
  for (const [key, value] of Object.entries(md.meta)) {
    if (key === "title") {
      meta.title = value;
    } else if (key === "author") {
      meta.author = value;
    } else if (key === "description") {
      meta.description = value;
    } else if (key === "date") {
      meta.date = value;
    }
  }
  return { meta: meta, content: md.content };
}

export async function getAllMDMeta(): Promise<metadata[]> {
  const dir = Deno.readDir("./posts");
  const meta = [];
  for await (const file of dir) {
    meta.push((await parseMD(file.name)).meta);
  }
  return meta;
}
