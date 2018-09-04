import { Component, Prop } from '@stencil/core'

@Component({
  tag: 'pc-badge',
  styleUrl: 'pc-badge.scss'
})
export class PcBadge {
  @Prop() text: string;
  @Prop() bg: string = 'primary';

  render() {
    return (
      <span class={`bgm-${this.bg}`}>
        {this.text}
      </span>
    )
  }
}
