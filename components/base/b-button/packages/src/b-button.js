export default {
  name: 'c-checkbox',
  props : {
    disable : {
      type : Boolean,
      default : false,
    },
    checkbox_status : {
      type : Boolean,
      default : false,
    },
    label : {
      type : String,
      default : 'Nationality',
    },
  },
  methods: {
    onClick(event) {
    }
  }
}