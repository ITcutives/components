import { Component, Prop } from '@stencil/core'

@Component({
  tag: 'pc-badge',
  styleUrl: 'styles/pc-badge.scss'
})
export class PcBadge {
  @Prop() text: string;
  componentDidLoad() {
    console.log('The component has been rendered');
  }
  componentDidUnload() {
    console.log('The component tag has been removed from the DOM');
  }

  render() {
    return (
      <div>
        PcBadge
        {this.text}
      </div>
    )
  }
}
