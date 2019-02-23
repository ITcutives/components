import { render } from '@stencil/core/testing';
import { PcCard } from './pc-card';

describe('pc-card', () => {
  it('should build', () => {
    expect(new PcCard()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [PcCard],
        html: '<pc-card></pc-card>'
      });
    });
  });
});
