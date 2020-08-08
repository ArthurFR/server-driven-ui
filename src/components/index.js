import MagicZone from './magic-zone/magic-zone.element.js';
import ContainerElement from './container/container.element.js';
import InputElement  from './input/input.element.js';
import ButtonElement from './button/button.element.js';
import CardElement from './card/card.element.js';
import ImageElement from './image/image.element.js';
import TextElement from './text/text.element.js';

customElements.define('card-element', CardElement);
customElements.define('image-element', ImageElement);
customElements.define('text-element', TextElement);
customElements.define('button-element', ButtonElement);
customElements.define('input-element', InputElement);
customElements.define('container-element', ContainerElement);
customElements.define('magic-zone', MagicZone);