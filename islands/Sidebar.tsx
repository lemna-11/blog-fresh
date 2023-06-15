import { tw } from "twind";
import { StateUpdater, useEffect, useState } from "preact/hooks";
import { metadata } from "../utils/Markdown.ts";

export function Sidebar() {
  const [navigable, setNavigable]: [metadata[], StateUpdater<metadata[]>] =
    useState<metadata[]>([]);

  useEffect(() => {
    const getData = async () => {
      console.log(
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

export default Sidebar;
