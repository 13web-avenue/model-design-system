/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
// import centered from '@storybook/addon-centered'


import contentArea from '../../layouts/02/content-area.vue'
import cinputGroups from './packages/c-inputgroups.vue'





import { withInfo } from 'storybook-addon-vue-info'

storiesOf('Homebrewed components / c-inputgroups', module)
  // .addDecorator(centered)
  .add('classic', withInfo({})(() => ({
    components: { cinputGroups , contentArea },
    template: `<contentArea wrapperType='homebrew' header='Classic'><cinputGroups compStyle="classic"/></contentArea>`,
    propsDescription : {
      label : 'Sets input label',
      type : 'Sets input type',
      rules : 'Accepts an array of functions that return either True or a String with an error message',
      icon : "Prepends an icon inside the component's input",
      disabled : 'Disable the input',
      readonly : 'Puts input in readonly state',
    }
  })))
  .add('minimalist', withInfo({})(() => ({
    components: { cinputGroups , contentArea },
    template: `<contentArea wrapperType='homebrew' header='Minimalist'><cinputGroups compStyle="minimal"/></contentArea>`,
    propsDescription : {
      label : 'Sets input label',
      type : 'Sets input type',
      rules : 'Accepts an array of functions that return either True or a String with an error message',
      icon : "Prepends an icon inside the component's input",
      disabled : 'Disable the input',
      readonly : 'Puts input in readonly state',
    }
  })))
  .add('append classic', withInfo({})(() => ({
    components: { cinputGroups , contentArea },
    template: `<contentArea wrapperType='homebrew' header='Append Classic'><cinputGroups compStyle="classicAppend"/></contentArea>`,
    propsDescription : {
      label : 'Sets input label',
      type : 'Sets input type',
      rules : 'Accepts an array of functions that return either True or a String with an error message',
      disabled : 'Disable the input',
      readonly : 'Puts input in readonly state',
      selectItems : 'Can be an array of strings for Select component',
      selectValue : 'Input value for Select component',
    }
  })))
  .add('append minimalist', withInfo({})(() => ({
    components: { cinputGroups , contentArea },
    template: `<contentArea wrapperType='homebrew' header='Append Minimalist'><cinputGroups compStyle="minimalAppend"/></contentArea>`,
    propsDescription : {
      label : 'Sets input label',
      type : 'Sets input type',
      rules : 'Accepts an array of functions that return either True or a String with an error message',
      disabled : 'Disable the input',
      readonly : 'Puts input in readonly state',
      selectItems : 'Can be an array of strings for Select component',
      selectValue : 'Input value for Select component',
    }
  })))
  .add('prepend classic', withInfo({})(() => ({
    components: { cinputGroups , contentArea },
    template: `<contentArea wrapperType='homebrew' header='Classic Prepend'><cinputGroups compStyle="classicPrepend"/></contentArea>`,
    propsDescription : {
      selectData : 'Accepts an array - which contains values of items, value, color, solo, box, outline, label',
    }
  })))
  .add('prepend minimalist', withInfo({})(() => ({
    components: { cinputGroups , contentArea },
    template: `<contentArea wrapperType='homebrew' header='Minimalist Prepend'><cinputGroups compStyle="minimalPrepend"/></contentArea>`,
    propsDescription : {
      selectData : 'Accepts an array - which contains values of items, value, color, solo, box, outline, label',
    }
  })))