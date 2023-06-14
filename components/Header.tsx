import { tw } from "twind";
import { JSX } from "preact";
import IconMarkdown from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/markdown.tsx";
import IconLemon2 from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/lemon-2.tsx";
import IconBrandLinkedin from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-linkedin.tsx";
import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-github.tsx";

type elementProps = {
  // unfortunately necessary as far as i can tell
  // deno-lint-ignore no-explicit-any
  [x: string]: any;
  size?: number | undefined;
  color?: string | undefined;
  stroke?: number | undefined;
};
type element = (prop: elementProps) => JSX.Element;

type menuItem = { name: string; href: string; icon: element };
type props = { currentroute: string };

export function Header({ currentroute }: props) {
  const menu: { right: menuItem[]; left: menuItem[] } = {
    left: [
      { name: "Blog and CV", href: "/", icon: IconMarkdown },
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
        href: "https://www.linkedin.com/in/mano-lemmens/",
        icon: IconBrandGithub,
      },
    ],
  };

  return (
    <div
      class={tw`
            flex justify-between
            px-10 py-4
            bg-yellow-100
            w-screen
        `}
    >
      <div class={tw`flex`}>
        {menu.left.map((arg) => (
          <a
            href={arg.href}
            class={tw`
                        flex
                        ${
              arg.href === currentroute ? "font-bold border-b-2" : ""
            }
                        `}
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
