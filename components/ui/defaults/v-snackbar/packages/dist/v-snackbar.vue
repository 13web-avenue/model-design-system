<template lang="pug">
div
  v-snackbar(v-model='snackbar', :bottom="y === 'bottom'", :left="x === 'left'", :multi-line="mode === 'multi-line'", :right="x === 'right'", :timeout='timeout', :top="y === 'top'", :vertical="mode === 'vertical'")
    | {{ text }}
    v-btn(color='pink', flat='', @click='snackbar = false')
      | Close
  v-btn(block='', color='primary', dark='', @click='snackbar = true')
    | Show Snackbar
</template>

<script>

export default {
  components : {},
  methods: {
    onClick () {
      this.$emit('click')
    }
  },
  data () {
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

</script>

