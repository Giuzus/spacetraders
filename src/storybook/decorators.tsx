import { StoryContext, StoryFn } from "@storybook/react";
import { useEffect } from "react";

export function withColorScheme(Story: StoryFn, context: StoryContext) {
  const { theme } = context.globals;

  useEffect(() => {
    document
      .querySelector("html")
      ?.setAttribute("data-theme", theme == "dark" ? "dracula" : "lemonade");
  });

  return <Story />;
}
