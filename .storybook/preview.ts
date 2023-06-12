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
  scheme: {
    name: "Scheme",
    description: "Select light or dark theme",
    defaultValue: "both",
    toolbar: {
      icon: "mirror",
      items: ["both", "light", "dark"],
      dynamicTitle: true
    }
  }
}


export default preview;
