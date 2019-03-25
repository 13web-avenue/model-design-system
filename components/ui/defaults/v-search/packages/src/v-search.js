export default {
  name: 'v-radiobutton',
  components: {
      
  },
  methods: {
    onClick () {
      this.$emit('click')
    }
  },
  props: {
      disable: {
        type:Boolean,
        default: false
        },
      radioOptions:{
        type:Object,
        default: {'Radio 1':'one','Radio 2':'two'}
        },
      selected: {
        type:String,
        default: 'one'
        },
    },
}