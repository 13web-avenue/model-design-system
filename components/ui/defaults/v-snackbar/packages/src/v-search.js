export default {
  methods: {
    onClick() {
      this.$emit('click')
    }
  },
  data() {
    return {
      snackbar: false,
      y: 'top',
      x: null,
      mode: '',
      timeout: 6000,
      text: 'Hello, I\'m a snackbar'
    }
  }
}