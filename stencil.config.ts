import {Config} from '@stencil/core';
import {sass} from '@stencil/sass';

export const config: Config = {
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/global/variables.scss'
      ]
    })
  ],
  namespace: 'itcutives-components',
  bundles: [
    { components: ['pc-fab'] },
    { components: ['pc-header'] },
    { components: ['pc-badge'] },
    { components: ['pc-card', 'pc-card-element'] },
    { components: ['my-component'] }
  ],
  outputTargets: [
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
