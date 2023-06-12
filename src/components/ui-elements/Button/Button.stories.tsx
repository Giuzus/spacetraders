import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button.component";
import { withColorScheme } from "../../../storybook/decorators";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  decorators: [withColorScheme],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
  },
};
