import { tw } from "twind";

export function Sidebar() {
  return (
    <div
      class={tw`
            flex-col p-4 
            bg-yellow-100
            h-full w-min`}
    >
      <p>sidebar</p>
    </div>
  );
}
