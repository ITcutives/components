import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'pc-fab',
  styleUrl: 'pc-fab.scss'
})
export class PcFab {
  @Prop() bgClass: string = 'primary';

  getClass() {
    return `btn ${this.bgClass} btn-round`;
  }

  render() {
    return (
      <button class={this.getClass()}>
        <slot></slot>
      </button>
    );
  }
}
