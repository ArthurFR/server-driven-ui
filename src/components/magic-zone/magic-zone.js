import fetchAsync from '../../utils/fetch.js';
import RenderEngine from '../../utils/render-engine.js';

export default class MagicZone extends HTMLElement {
  constructor() {
    super();
    this.renderEngine = new RenderEngine();
    this.attachShadow({ mode: 'open' });
  }

  get src() {
    return this.getAttribute('src');
  }
  
  set src(newValue) {
    this.setAttribute('src', newValue);
  }

  async render() {
    const { shadowRoot } = this;
    const elements = await this.renderEngine.createElments(this.src);
    const text = document.createTextNode(JSON.stringify(elements));
    shadowRoot.appendChild(text)
  }

  connectedCallback() {
    if (this.src) {
      this.render();
    }
  }
}
