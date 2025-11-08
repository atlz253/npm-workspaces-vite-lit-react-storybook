import { html, LitElement, PropertyValues } from "lit";
import { customElement, property } from "lit/decorators.js";

export const TAG_NAME = "lit-counter";

@customElement(TAG_NAME)
export class CounterElement extends LitElement {
  @property({ type: Number, reflect: true })
  count?: number;

  protected firstUpdated(_changedProperties: PropertyValues): void {
    this.count = 0;
  }

  protected render() {
    return html`<span>current count: ${this.count ?? 0}</span>
      <button @click=${() => (this.count = this.count ? this.count + 1 : 1)}>
        increment
      </button>`;
  }
}
