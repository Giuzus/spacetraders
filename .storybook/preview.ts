import "../src/index.css";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Select light or dark theme",
    defaultValue: "light",
    toolbar: {
      icon: "mirror",
      items: ["light", "dark"],
      dynamicTitle: true,
    },
  },
};

export default preview;
