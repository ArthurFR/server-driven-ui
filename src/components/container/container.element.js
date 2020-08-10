export default class ContainerElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  render() {
    const { shadowRoot } = this;
    shadowRoot.innerHTML = '';
    shadowRoot.appendChild(this.template().content.cloneNode(true));
  }

  container() {
    const container = this.shadowRoot.querySelector('#container');
    return container;
  }

  element() {
    const element = this.shadowRoot.querySelector('#container');
    return element;
  }

  template() {
    const template = document.createElement('template');
    template.innerHTML = `
      <div id="container"></div>
    `;

    return template;
  }
}
