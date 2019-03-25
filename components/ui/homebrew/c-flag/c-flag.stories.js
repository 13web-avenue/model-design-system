/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
// import centered from '@storybook/addon-centered';
import {withReadme} from 'storybook-readme'

import cFlag from './packages/c-flag.vue'
import cFlagGallery from './c-flagGallery.vue'

import cflagReadme from './README.md'
import cflagGalleryReadme from './READMEFG.md'

import contentarea from '../../layouts/02/content-area.vue'

import { withInfo } from 'storybook-addon-vue-info'

storiesOf('Homebrewed components / c-flag', module)
  // .addDecorator(centered)
  .add('Default',withReadme(cflagReadme, withInfo({})(()=>({
    components: { cFlag,contentarea },
    template: `<c-flag />`,
    propsDescription : {
      ccode : 'Country code of the corresponding flag to be shown',
      level : 'Shows profeciency level as circle strength around the flag , depending on the value selected',
      country : 'Country name to be shown above the flag component'
    }
  }))))
  .add('The Gallery',withReadme(cflagGalleryReadme, () => ({
    components: { cFlagGallery,contentarea },
    template: `<contentarea wrapperType='homebrew'header='Flag Gallery'><cFlagGallery /></contentarea>`
  })))
