<template lang="pug">
    v-checkbox(:label="label ? label : 'Checkbox 1'", :input-value='checkbox_status', :disabled='disable')
</template>

<script>
export default {
  name: 'v-checkboxcomponent',
  components: {
  },
  props: {
    disable: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'normal'
    },
    checkbox_status: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: 'Nationality'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>

</style>
