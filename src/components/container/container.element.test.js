import ContainerElement from './container.element.js';

customElements.define('container-element', ContainerElement);
describe('container-element', () => {
  let containerElement;

  beforeEach(() => {
    containerElement = document.createElement('container-element');
  });

  it('template should be defined', () => {
    const template = containerElement.template();
    expect(template).toBeDefined();
  });

  it('container should be defined', () => {
    const container = containerElement.container();
    expect(container).toBeDefined();
  });

  it('should call appendChild with template', () => {
    const template = containerElement.template().content.cloneNode(true);
    const appendChildSpy = spyOn(containerElement.shadowRoot, 'appendChild');
    containerElement.render();

    expect(appendChildSpy).toHaveBeenCalledWith(template);
  });
});
