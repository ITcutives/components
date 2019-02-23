import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'pc-card-element',
  styleUrl: 'pc-card-element.scss'
})
export class PcCardElement {
  @Prop() type: string = 'body';
  @Prop() bg: string = 'ch-alt';

  render() {
    return (
      <div class={`pc-card-element ${this.type} ${this.bg === 'ch-alt' ? 'ch-alt' : 'bgm-' + this.bg} padding`}>
        <slot/>
      </div>
    );
  }
}
