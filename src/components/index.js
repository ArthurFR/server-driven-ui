import MagicZone from './magic-zone/magic-zone.element.js';
import ContainerElement from './container/container.element.js';
import InputElement  from './input/input.element.js';
import ButtonElement from './button/button.element.js';

customElements.define('button-element', ButtonElement);
customElements.define('input-element', InputElement);
customElements.define('container-element', ContainerElement);
customElements.define('magic-zone', MagicZone);