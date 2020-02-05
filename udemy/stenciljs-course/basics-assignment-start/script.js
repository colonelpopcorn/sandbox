'use strict';

class TestComponent extends HTMLElement {
  constructor() {
    super();
    this._template = `
    <style>
      slot {
        display: none;
      }
    </style>
    <button>Show</button>
    <slot>Some default</slot>
    `;
    this._slotHidden = true;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = this._template;
  }

  connectedCallback() {
    const button = this.shadowRoot.querySelector('button');
    const infoEl = this.shadowRoot.querySelector('slot');

    button.addEventListener('click', () => {
      if (this._slotHidden) {
        infoEl.style.display = 'block';
        button.textContent = 'Hide';
        this._slotHidden = false;
      } else {
        infoEl.style.display = 'none';
        button.textContent = 'Show';
        this._slotHidden = true;
      }
    });
  }
}

customElements.define('test-component', TestComponent);
