import { render } from '@stencil/core/testing';
import { PcFab } from './pc-fab';

describe('pc-fab', () => {
  it('should build', () => {
    expect(new PcFab()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [PcFab],
        html: '<pc-fab></pc-fab>'
      });
    });
  });
});
