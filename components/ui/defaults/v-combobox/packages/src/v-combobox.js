export default {
  methods: {
    onClick () {
      this.$emit('click')
    }
  },
  props: {
    label: {
      type: String,
      default:'Select Items'
    },
    disabled: {
      type: Boolean,
      default: false
     },
    selected: {
      type: String,
      default: 'Programming'
    },
    select:{
      type: String
    },
    items: {
      type: Array,
      default: ()=> ['Programming','Design','Vue','Vuetify']
    },
  }
}