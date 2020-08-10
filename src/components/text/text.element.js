export default class TextElement extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.render();
    }
  
    static get observedAttributes() {
      return ['value'];
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

    element() {
      const element = this.shadowRoot.querySelector('p');
      return element;
    }
  
    template() {
      const template = document.createElement('template');
      template.innerHTML = `
        <p>${this.getAttribute('value')}</p>
      `;
  
      return template;
    }
  
    get value() {
      return this.getAttribute('value');
    }
  
    set value(value) {
      this.setAttribute('value', value);
    }
  }
  