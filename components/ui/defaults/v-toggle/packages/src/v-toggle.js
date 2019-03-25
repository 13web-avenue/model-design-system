export default {
  methods: {
    onClick() {
      this.$emit('click')
    }
  },
  props: {
    label: {
      type: String,
      default: 'On'
    },
    switch_status: {
      type: Boolean,
      default: false
    },
    disable: {
      type: Boolean,
      default: false
    },
  },
}