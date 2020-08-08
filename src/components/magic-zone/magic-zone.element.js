import fetchAsync from '../../utils/fetch.js';
import RenderEngine from '../../utils/render-engine.js';

export default class MagicZone extends HTMLElement {
  constructor() {
    super();
    this.renderEngine = new RenderEngine();
    this.attachShadow({ mode: 'open' });
  }

  async render() {
    const { shadowRoot } = this;
    shadowRoot.innerHTML = '';
    const elements = await this.renderEngine.createElments(this.src);

    if (elements) {
      shadowRoot.appendChild(elements)
    } else {
      const template = this.template().content.cloneNode(true)
      const button = template.querySelector('button');
      button.onclick = this.render.bind(this);
      shadowRoot.appendChild(template);
    }
  }

  connectedCallback() {
    if (this.src) {
      this.render();
    }
  }

  template() {
    const template = document.createElement('template');
    template.innerHTML = `
      <p>Oops, Something Went Wrong</p>
      <button id="tryAgain">Try Again</button>
    `;

    return template;
  }

  get src() {
    return this.getAttribute('src');
  }
  
  set src(newValue) {
    this.setAttribute('src', newValue);
  }
}
