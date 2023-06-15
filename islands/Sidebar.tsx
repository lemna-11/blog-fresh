import { tw } from "twind";
import { useEffect, useState } from "preact/hooks";
import { metadata } from "../utils/Markdown.ts";

export default function Sidebar() {
  const [navigable, setNavigable] = useState<metadata[]>([]);
  console.log("running");

  useEffect(() => {
    const getData = async () => {
      setNavigable(
        await (await fetch("http://localhost:8000/api/metadata")).json(),
      );
    };
    getData();
  }, []);

  return (
    <div
      class={tw`
            flex-col p-4 
            h-full w-min`}
    >
      <p>CONTENT BOYS</p>
      {navigable.map((postHeader) => <p>{postHeader.title}</p>)}
    </div>
  );
}
