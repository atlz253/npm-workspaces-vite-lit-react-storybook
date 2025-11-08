import ".";
import { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import { CounterElement } from ".";

const meta = {
  title: "lit-counter",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  render: ({ count }) => html`<lit-counter .count=${count}></lit-counter>`,
  argTypes: {
    count: {
      control: "number",
    },
  },
} satisfies Meta<CounterElement>;
export default meta;

type Story = StoryObj<CounterElement>;

export const Default: Story = {};
