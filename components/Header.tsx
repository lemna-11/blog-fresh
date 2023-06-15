import { tw } from "twind";
import { menuItem } from "../utils/menuTypes.ts";
import IconMarkdown from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/markdown.tsx";
import IconLemon2 from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/lemon-2.tsx";
import IconBrandLinkedin from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-linkedin.tsx";
import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-github.tsx";
import IconMenu2 from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/menu-2.tsx";
import IconFileText from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/file-text.tsx";

type props = { currentroute: string };

export function Header({ currentroute }: props) {
  const menu: { right: menuItem[]; left: menuItem[] } = {
    left: [
      { name: "Main", href: "/", icon: IconMenu2 },
      { name: "Blog", href: "/posts", icon: IconMarkdown },
      { name: "CV", href: "/cv", icon: IconFileText },
    ],
    right: [
      {
        name: "Fresh Framework",
        href: "https://fresh.deno.dev/",
        icon: IconLemon2,
      },
      {
        name: "Personal linkedin",
        href: "https://www.linkedin.com/in/mano-lemmens/",
        icon: IconBrandLinkedin,
      },
      {
        name: "Project git",
        href: "https://github.com/lemna-11/blog-fresh",
        icon: IconBrandGithub,
      },
    ],
  };

  return (
    <div
      class={tw`
            flex justify-between
            px-10 py-6
            bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300
            w-screen
        `}
    >
      <div class={tw`flex space-x-6`}>
        {menu.left.map((arg) => (
          <a
            href={arg.href}
            class={tw`
                        flex
                        ${
              arg.href === currentroute ? "font-bold border-b-2" : ""
            }`}
          >
            {arg.icon({ class: "w-6 h-6" })}
            <p>{arg.name}</p>
          </a>
        ))}
      </div>
      <div
        class={tw`
                flex
                space-x-6
            `}
      >
        {menu.right.map((arg) => (
          <a href={arg.href} class={tw`flex`}>
            {arg.icon({ class: "w-6 h-6" })}
            <p>{arg.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
