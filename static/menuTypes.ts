import { JSX } from "preact";

export type elementProps = {
  // unfortunately necessary as far as i can tell
  // deno-lint-ignore no-explicit-any
  [x: string]: any;
  size?: number | undefined;
  color?: string | undefined;
  stroke?: number | undefined;
};
export type element = (prop: elementProps) => JSX.Element;

export type menuItem = { name: string; href: string; icon: element };
