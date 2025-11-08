import { html, LitElement, PropertyValues, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import buttonStyles from "@atlz253/styles/button.module.css";
import inlineButtonStyles from "@atlz253/styles/button.module.css?inline";

export const TAG_NAME = "lit-counter";

@customElement(TAG_NAME)
export class CounterElement extends LitElement {
  static styles = [unsafeCSS(inlineButtonStyles)];

  @property({ type: Number, reflect: true })
  count?: number;

  protected firstUpdated(_changedProperties: PropertyValues): void {
    this.count = 0;
  }

  protected render() {
    return html`<span>current count: ${this.count ?? 0}</span>
      <button
        class=${buttonStyles.button}
        @click=${() => (this.count = this.count ? this.count + 1 : 1)}
      >
        increment
      </button>`;
  }
}
