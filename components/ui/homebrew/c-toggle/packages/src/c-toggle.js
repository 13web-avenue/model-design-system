export default {
  name: 'c-toggle',
  props : {
    disable : {
      type : Boolean,
      default : false,
    },
    switch_status : {
      type : Boolean,
      default : false,
    },
    label : {
      type : String,
      default : 'On',
    },
  }
}