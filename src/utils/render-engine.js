import fetchAsync from './fetch.js';
import { COMPONENTS_MAP } from '../components/components-map.js';

export default class RenderEngine {
  constructor(url) {
    this.url = url;
  }

  async createElments(url) {
    const data = await fetchAsync(url);
    const element = this.generateElement(data);
    return element;
  }

  generateElement({type, children, ...attributes}) {
    const element = document.createElement(COMPONENTS_MAP[type]);
    this.setAttributes(element, attributes);
    const childrenElements = children ? children.map(child => this.generateElement(child)) : [];
    childrenElements.forEach(child => element.container().appendChild(child));
    return element;
  }

  setAttributes(element, attributes) {
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);    
    });
  }
}
