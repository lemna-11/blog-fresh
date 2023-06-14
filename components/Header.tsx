import { tw } from "twind";
import { JSX } from "preact";
import IconMarkdown from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/markdown.tsx";
import IconLemon2 from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/lemon-2.tsx";
import IconBrandLinkedin from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-linkedin.tsx";
import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-github.tsx";
import IconMenu2 from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/menu-2.tsx"
import IconMail from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/mail.tsx"

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
      { name: "Main", href: "/", icon: IconMenu2},
      { name: "Blog", href: "/posts", icon: IconMarkdown },
      { name: "CV", href: "/cv", icon: IconMail}
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
            px-10 py-4
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
