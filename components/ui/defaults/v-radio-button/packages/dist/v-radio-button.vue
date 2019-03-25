<template lang="pug">
v-radio-group(:value='selected')
  v-radio(v-for='(value,key) in radioOptions', :key='key', :label='key', :value='value', :disabled='disable')
</template>

<script>

export default {
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
      type: Object,
      default: {'Radio 1':'one','Radio 2':'two'}
    },
    selected: {
      type:String,
      default: 'one'
    },
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>

</style>
