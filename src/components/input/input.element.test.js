import InputElement from './input.element.js';

customElements.define('input-element', InputElement);
describe('input-element', () => {
  let inputElement;

  beforeEach(() => {
    inputElement = document.createElement('input-element');
  });

  it('template should be defined', () => {
    const template = inputElement.template();
    expect(template).toBeDefined();
  });

  it('should call appendChild with template', () => {
    const template = inputElement.template().content.cloneNode(true);
    const appendChildSpy = spyOn(inputElement.shadowRoot, 'appendChild');
    inputElement.render();

    expect(appendChildSpy).toHaveBeenCalledWith(template);
  });

  it('should call render', () => {
    const renderSpy = spyOn(inputElement, 'render');
    inputElement.attributeChangedCallback('value', '', 'test');
    expect(renderSpy).toHaveBeenCalled();
  });

  it('should get value equals to test', () => {
    inputElement.value = 'test';
    expect(inputElement.value).toBe('test');
  });

  it('should get value equals to test', () => {
    inputElement.id = 'test';
    expect(inputElement.id).toBe('test');
  });
});
