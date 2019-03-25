<template lang="pug">
v-switch(:label="label ? label : 'Switch 1'", :input-value='switch_status', :disabled='disable')
</template>

<script>


export default {
  methods: {
    onClick () {
      this.$emit('click')
    }
  },
  props: {
      label: {
        type:String,
        default: 'On'
        },
      switch_status:{
        type:Boolean,
        default: false
        },
      disable: {
        type:Boolean,
        default: false
        },
    },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>

</style>
