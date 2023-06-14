import { Marked } from "../markdown/mod.ts";

export type metadata = { title: string; author: string, description?: string, date?: Date };
const emptyMetadata: metadata = { title: "", author: "", description: "", date: new Date()};

export async function parseMD(name: string): Promise<{ meta: metadata; content: string }> {
    const md = Marked.parse(await Deno.readTextFile(`./posts/${name}`))
    const meta = emptyMetadata;
    // ugly but works ¯\_(ツ)_/¯
    for (const [key, value] of Object.entries(md.meta)){
        if(key === "title"){
            meta.title = value;
        } else if(key === "author"){
            meta.author = value;
        } else if(key === "description"){
            meta.description = value;
        } else if(key === "date"){
            meta.date = value;
        }
    }
    return { meta: meta, content: md.content }
}

export async function getAllMD(): Promise<metadata[]> {
    const dir = Deno.readDir("./posts");
    const meta = []
    for await (const file of dir) {
        meta.push((await parseMD(file.name)).meta);
    }
    return meta;
}