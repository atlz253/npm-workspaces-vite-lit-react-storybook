import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

export const TAG_NAME = "lit-loader";

@customElement(TAG_NAME)
export class LoaderElement extends LitElement {
  protected render() {
    return html`<div>Loading...</div>`;
  }
}
