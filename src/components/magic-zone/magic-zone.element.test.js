import MagicZone from './magic-zone.element.js';

customElements.define('magic-zone', MagicZone);
describe('magic-zone', () => {
  let magicZone;

  beforeEach(() => {
    magicZone = document.createElement('magic-zone');
  });

  it('template should be defined', () => {
    const template = magicZone.template();
    expect(template).toBeDefined();
  });

  it('should call render', () => {
    const renderSpy = spyOn(magicZone, 'render');
    magicZone.src = 'test';
    magicZone.connectedCallback();
    expect(renderSpy).toHaveBeenCalled();
  });

  it('should get src equals to test', () => {
    magicZone.src = 'test';
    expect(magicZone.src).toBe('test');
  });
});
