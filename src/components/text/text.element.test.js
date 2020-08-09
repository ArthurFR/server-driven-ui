import TextElement from './text.element.js';

customElements.define('text-element', TextElement);
describe('text-element', () => {
  let textElement;

  beforeEach(() => {
    textElement = document.createElement('text-element');
  });

  it('template should be defined', () => {
    const template = textElement.template();
    expect(template).toBeDefined();
  });

  it('should call appendChild with template', () => {
    const template = textElement.template().content.cloneNode(true);
    const appendChildSpy = spyOn(textElement.shadowRoot, 'appendChild');
    textElement.render();

    expect(appendChildSpy).toHaveBeenCalledWith(template);
  });

  it('should call render', () => {
    const renderSpy = spyOn(textElement, 'render');
    textElement.attributeChangedCallback('value', '', 'test');
    expect(renderSpy).toHaveBeenCalled();
  });

  it('should get value equals to test', () => {
    textElement.value = 'test';
    expect(textElement.value).toBe('test');
  });
});
