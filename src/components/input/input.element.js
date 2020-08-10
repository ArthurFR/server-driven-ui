export default class InputElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  static get observedAttributes() {
    return ['id', 'value'];
  } 

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  render() {
    const { shadowRoot } = this;
    shadowRoot.innerHTML = '';
    shadowRoot.appendChild(this.template().content.cloneNode(true));
  }

  template() {
    const template = document.createElement('template');
    template.innerHTML = `
      <input id="${this.getAttribute('id')}" type="text" value="${this.getAttribute('value')}"/>
    `;
    return template;
  }

  element() {
    const element = this.shadowRoot.querySelector('input');
    return element;
  }

  get value() {
    return this.getAttribute('value');
  }

  set value(value) {
    this.setAttribute('value', value);
  }

  get id() {
    return this.getAttribute('id');
  }

  set id(id) {
    this.setAttribute('id', id);
  }
}
