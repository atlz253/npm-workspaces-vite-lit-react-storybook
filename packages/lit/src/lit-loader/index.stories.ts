import ".";
import { html, render } from "lit";
import { LoaderElement } from ".";
import { Meta, StoryObj } from "@storybook/web-components-vite";
import { ifDefined } from "lit/directives/if-defined.js";

const meta = {
  title: "lit-loader",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  render: ({ caption }) =>
    html`<lit-loader caption=${ifDefined(caption)}></lit-loader>`,
  argTypes: {
    caption: {
      control: "text",
    },
  },
} satisfies Meta<LoaderElement>;
export default meta;

type Story = StoryObj<LoaderElement>;

export const Default: Story = {};
