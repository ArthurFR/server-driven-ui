import ImageElement from './image.element.js';

customElements.define('image-element', ImageElement);
describe('image-element', () => {
  let imageElement;

  beforeEach(() => {
    imageElement = document.createElement('image-element');
  });

  it('template should be defined', () => {
    const template = imageElement.template();
    expect(template).toBeDefined();
  });

  it('should call appendChild with template', () => {
    const template = imageElement.template().content.cloneNode(true);
    const appendChildSpy = spyOn(imageElement.shadowRoot, 'appendChild');
    imageElement.render();

    expect(appendChildSpy).toHaveBeenCalledWith(template);
  });

  it('should call render', () => {
    const renderSpy = spyOn(imageElement, 'render');
    imageElement.attributeChangedCallback('url', '', 'test');
    expect(renderSpy).toHaveBeenCalled();
  });

  it('should get value equals to test', () => {
    imageElement.url = 'test';
    expect(imageElement.url).toBe('test');
  });

  it('should get value equals to test', () => {
    imageElement.description = 'test';
    expect(imageElement.description).toBe('test');
  });
});
