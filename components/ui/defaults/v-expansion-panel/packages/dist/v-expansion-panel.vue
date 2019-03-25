<template lang="pug">
v-expansion-panel(:disabled="disable")
  v-expansion-panel-content(v-for='(item,i) in 5', :key='i')
    div(slot='header') Item
    v-card
      v-card-text
        | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</template>

<script>


export default {
  name: 'v-exppanel-component',
  components : {},
  methods: {
    onClick () {
      this.$emit('click')
    }
  },
  props: {
    disable: Boolean
  }
}

</script>

