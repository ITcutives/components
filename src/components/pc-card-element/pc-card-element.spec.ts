import { render } from '@stencil/core/testing';
import { PcCardElement } from './pc-card-element';

describe('PcCardElement', () => {
  it('should build', () => {
    expect(new PcCardElement()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [PcCardElement],
        html: '<pc-card-element></pc-card-element>'
      });
    });
  });
});
