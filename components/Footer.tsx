import { tw } from "twind";
import { menuItem } from "../static/menuTypes.ts";
import IconMail from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/mail.tsx";
import IconCopyleft from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/copyleft.tsx";
import IconPhone from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/phone.tsx";

export function Footer() {
  const menu: menuItem[] = [
    { name: "mail", href: "mailto:lemmensmano@gmail.com", icon: IconMail },
    {
      name: "licence",
      href: "https://www.gnu.org/licenses/gpl-3.0.en.html#license-text",
      icon: IconCopyleft,
    },
    { name: "telefoon", href: "tel:+32493643352", icon: IconPhone },
  ];

  return (
    <div
      class={tw`
            flex justify-between
            px-10 py-6
            bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300
            w-screen
        `}
    >
      {menu.map((arg) => (
        <a href={arg.href} class={tw`flex`}>
          {arg.icon({ class: "h-6 w-6" })}
          <p>{arg.name}</p>
        </a>
      ))}
    </div>
  );
}
