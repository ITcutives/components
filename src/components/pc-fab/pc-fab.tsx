import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'pc-fab',
  styleUrl: 'pc-fab.scss'
})
export class PcFab {
  @Prop() bg: string = 'primary';

  render() {
    return (
      <button class={`btn bgm-${this.bg} btn-round`}>
        <slot></slot>
      </button>
    );
  }
}
