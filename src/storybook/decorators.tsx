import { StoryContext, StoryFn } from "@storybook/react";

export function withColorScheme(Story: StoryFn, context: StoryContext) {
  const { scheme } = context.globals;

  return (
    <div>
      {(scheme === "light" || scheme === "both") && (
        <div>
          <Story />
        </div>
      )}

      {scheme === "both" && <hr />}

      {(scheme === "dark" || scheme === "both") && (
        <div className="dark">
          <Story />
        </div>
      )}
    </div>
  );
}
