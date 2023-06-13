import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import Modal from "./Modal.component";
import { useModal } from "../../../hooks/useModal";
import { Button } from "../Button/Button.component";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "ui-elements/Modal",
  component: Modal,
  tags: ["autodocs"],
  decorators: [
    (Story: StoryFn, ctx) => {
      const [isOpen, setIsOpen, toggle] = useModal(false);
      return (
        <>
          <Button primary onClick={toggle}>
            Open modal
          </Button>
          <Story args={{ ...ctx.args, isOpen, onClose: setIsOpen }} />
        </>
      );
    },
  ],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Modal title",
    children: "Modal content",
    isOpen: false,
  },
};
