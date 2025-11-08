import { Meta, StoryObj } from "@storybook/react-vite";
import { Counter } from ".";

const meta = {
  title: "Counter",
  component: Counter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Counter>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {},
};
