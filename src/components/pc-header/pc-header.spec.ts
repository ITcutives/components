import { render } from '@stencil/core/testing';
import { PcHeader } from './pc-header';

describe('pc-header', () => {
  it('should build', () => {
    expect(new PcHeader()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [PcHeader],
        html: '<pc-header></pc-header>'
      });
    });
  });
});
