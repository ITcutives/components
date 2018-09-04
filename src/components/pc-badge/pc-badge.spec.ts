import { flush, render } from '@stencil/core/testing';
import { PcBadge } from './pc-badge';

describe('pc-badge', () => {
  it('should build', () => {
    expect(new PcBadge()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [PcBadge],
        html: '<pc-badge></pc-badge>'
      });
    });

    it('should work without parameters', () => {
      expect(element.textContent).toMatch(/PcBadge/);
    });

    it('should display the text', async () => {
      element.text = 'text';
      await flush(element);
      expect(element.textContent).toMatch(/text/);
    });
  });
});
