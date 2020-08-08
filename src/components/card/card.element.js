import styles from './card.element.scss';

export default class CardElement extends HTMLElement {
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

  template() {
    const template = document.createElement('template');
    template.innerHTML = `
      <style>${styles.toString()}</style>
      <div id="container"></div>
    `;

    return template;
  }
}
