import fetchAsync from './fetch.js';
import { COMPONENTS_MAP } from '../components/components-map.js';

export default class RenderEngine {
  constructor(url) {
    this.url = url;
  }

  async createElments(url) {
    try {
      const data = await fetchAsync(url);
      const element = this.generateElement(data);
      return element;
    } catch (error){
      return null;
    }
  }

  generateElement({type, children, styles, ...attributes}) {
    const elementType = COMPONENTS_MAP[type];
    let element = null;

    if (elementType) {
      element = document.createElement(COMPONENTS_MAP[type]);
      this.setAttributes(element, attributes);
      this.setStyles(element, styles);
      this.createChildrenElements(element, children);
    } else {
      element = document.createTextNode('');
    }

    return element;
  }

  setAttributes(element, attributes) {
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);    
    });
  }

  setStyles(element, styles) {
    if (styles) {
      styles.forEach(style => {
        element.element().style[style.attribute] = style.value;
      });
    }
  }

  createChildrenElements(element, children) {
    const childrenElements = children ? children.map(child => this.generateElement(child)) : [];
    childrenElements.forEach(child => element.container().appendChild(child));
  }
}
