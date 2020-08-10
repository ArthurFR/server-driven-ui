export default class ImageElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  static get observedAttributes() {
    return ['url', 'description'];
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
      <img src="${this.getAttribute('url')}" alt="${this.getAttribute('description')}">
    `;

    return template;
  }

  element() {
    const element = this.shadowRoot.querySelector('img');
    return element;
  }

  get url() {
    return this.getAttribute('url');
  }

  set url(url) {
    this.setAttribute('url', url);
  }

  get description() {
    return this.getAttribute('description');
  }

  set description(description) {
    this.setAttribute('description', description);
  }
}
