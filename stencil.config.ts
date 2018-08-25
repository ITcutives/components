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
  namespace: 'mycomponent',
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
