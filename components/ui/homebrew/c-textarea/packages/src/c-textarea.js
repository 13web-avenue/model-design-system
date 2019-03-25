export default {
  name: 'c-textarea',
  props: {
      label: {
          type : String,
          default : 'Comment',
      },
      disabled: {
          type : Boolean,
          default : false,
      },
      readonly: {
          type : Boolean,
          default : false,
      },
      value: {
          type : String,
          default : 'Lorem Ipsum',
      },
      hint: {
          type : String,
          default : 'Hint!',
      },
      rules: {
          type : Array,
      },
  },
}