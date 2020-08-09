import RenderEngine from './render-engine.js';

describe('render-engine', () => {
  let renderEngine;

  beforeEach(() => {
    renderEngine = new RenderEngine();
  });

  it('should return null when generating element', () => {
    document.createTextNode = (text) => null;
    const element = renderEngine.generateElement({ type: 'test'});
    expect(element).toBe(null);
  });

  it('should call setAttributes and createChildrenElements', () => {
    const attr = { type: 'container', children:[{ type: 'text' }], attribute: 'test'};
    const setAttributesSpy = spyOn(renderEngine, 'setAttributes');
    const createChildrenElementsSpy = spyOn(renderEngine, 'createChildrenElements');
    const element = renderEngine.generateElement(attr);
    const {type, children, ...attributes} = attr;
    expect(setAttributesSpy).toHaveBeenCalledWith(element, attributes);
    expect(createChildrenElementsSpy).toHaveBeenCalledWith(element, [{ type: 'text' }]);
    expect(element).toBeDefined();
  });

  it('should call setAttribute 2 times', () => {
    const element = document.createElement('img');
    const attributes = {src: 'url', alt: 'Description'};
    renderEngine.setAttributes(element, attributes);
    expect(element.getAttribute('src')).toBe('url');
    expect(element.getAttribute('alt')).toBe('Description');
  });
})