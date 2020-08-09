import ButtonElement from './button.element.js';

customElements.define('button-element', ButtonElement);
describe('button-element', () => {
  let buttonElement;

  beforeEach(() => {
    buttonElement = document.createElement('button-element');
  });

  it('template should be defined', () => {
    const template = buttonElement.template();
    expect(template).toBeDefined();
  });

  it('should get value equals to test', () => {
    buttonElement.value = 'test';
    expect(buttonElement.value).toBe('test');
  });

  it('should call render', () => {
    const renderSpy = spyOn(buttonElement, 'render');
    buttonElement.attributeChangedCallback('value', '', 'test');
    expect(renderSpy).toHaveBeenCalled();
  });

  it('should call appendChild with template', () => {
    const template = buttonElement.template().content.cloneNode(true);
    const appendChildSpy = spyOn(buttonElement.shadowRoot, 'appendChild');
    buttonElement.render();

    expect(appendChildSpy).toHaveBeenCalledWith(template);
  });
});
