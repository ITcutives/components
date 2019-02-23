import { Component } from '@stencil/core';

@Component({
  tag: 'pc-card',
  styleUrl: 'pc-card.scss'
})
export class PcCard {
  render() {
    return (
      <div class="pc-card">
        <slot />
      </div>
    );
  }
}
