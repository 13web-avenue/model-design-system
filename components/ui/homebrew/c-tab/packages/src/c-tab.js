export default {
  name: 'c-tab',
  props : {
    tabContents : {
      type : Array,
      default: [{item:'first',content:'This is First Tab'}, {item:'second',content:'This is Second Tab'}, {item:'third',content:'This is Third Tab'}]
    },
    active : {
      type : Number,
      default: 0
    },
  }
}