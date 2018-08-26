import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'pc-header',
  styleUrl: 'pc-header.scss'
})
export class PcHeader {
  @Prop() description: string = 'ITcutives';
  @Prop() logo: string;
  @Prop() theme: string = 'primary';

  render() {
    return (
      <div class="pc-header">
        <div class={`back bgm-${this.theme}-shade1`}>
          <div class="arrow">
            <slot name="backIcon"></slot>
          </div>
        </div>
        <div class={`place bgm-${this.theme}`}>
          <div class="icons">
            <img src={this.logo}/>
          </div>
        </div>
        <div class={`description text-${this.theme}`}>{this.description}</div>
        <slot name="right"></slot>
      </div>
    );
  }
}
