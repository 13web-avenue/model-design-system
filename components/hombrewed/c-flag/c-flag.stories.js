/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
// import centered from '@storybook/addon-centered';
import {withReadme} from 'storybook-readme'

import cFlag from './c-flag.vue'
import cFlagGallery from './c-flagGallery.vue'
import cflagReadme from 'c-flag/README.md'

storiesOf('Homebrewed components / c-flag', module)
  // .addDecorator(centered)
  .add('Default',withReadme(cflagReadme,()=>({
    components: { cFlag },
    template: `<c-flag />`
  })))
  .add('The Gallery', () => ({
    components: { cFlagGallery },
    template: `<cFlagGallery />`
  }))
