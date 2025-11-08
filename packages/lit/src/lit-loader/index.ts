import { css, html, LitElement, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import spinnerURL from "./assets/spinner.svg?raw";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

export const TAG_NAME = "lit-loader";

@customElement(TAG_NAME)
export class LoaderElement extends LitElement {
  static styles = css`
    :host {
      display: flex;
      width: fit-content;
      align-items: center;
      flex-direction: column;
      justify-content: center;
    }
  `;

  @property({ type: String, reflect: true })
  caption?: string | typeof nothing;

  protected render() {
    return html`
      <div>${unsafeHTML(spinnerURL)}</div>
      ${this.caption ? html`<div>${this.caption}</div>` : nothing}
    `;
  }
}
