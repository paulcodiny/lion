import { LitElement } from 'lit';

export class SSRLitElement extends LitElement {
  addEventListener(event, listener) {
    if (typeof window === 'undefined') {
      return;
    }

    super.addEventListener(event, listener);
  }

  removeEventListener(event, listener) {
    if (typeof window === 'undefined') {
      return;
    }

    super.addEventListener(event, listener);
  }
}
