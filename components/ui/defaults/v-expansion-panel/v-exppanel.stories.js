/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
// import centered from '@storybook/addon-centered'

import VExppanel from './packages/v-exp-panel.vue'

import { withReadme } from 'storybook-readme'
import README from './README.md'
import { withInfo } from 'storybook-addon-vue-info'
import contentArea from '../../../layouts/02/content-area.vue'

storiesOf('UI Kit / v-exppanel', module)
  // .addDecorator(centered)
  .add('Default', withReadme(README, withInfo({})((() => ({
    components: { VExppanel, contentArea },
    template: `<contentArea wrapperType='UI kit' header='V-Expansion Panel'><VExppanel /></contentArea>`,
    propsDescription : {
      disable : 'Sets Boolean type',
    }
  })))))
  .add('Disable', withReadme(README, withInfo({})((() => ({
    components: { VExppanel, contentArea },
    template: `<contentArea wrapperType='UI kit' header='V-Expansion Panel Disabled'><VExppanel disable="true"/></contentArea>`,
    propsDescription : {
      disable : 'Sets Boolean type',
    }
  })))))
