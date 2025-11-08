import { Meta, StoryObj } from "@storybook/react-vite";
import { Loader } from ".";

const meta = {
  title: "Loader",
  component: Loader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Loader>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {},
};
