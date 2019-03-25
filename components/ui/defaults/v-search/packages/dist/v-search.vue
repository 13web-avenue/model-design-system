<template lang="pug">
    v-text-field(:label="label ? label : 'Search'", append-icon='search', :disabled='disable ? disable : false', :clearable='clear ? clear : false')
</template>

<script>

export default {
   props: {
      disable: {
        type:Boolean,
        default: false
      },
      label: {
        type:String,
        default: 'Search'
      },
      clear: {
        type:Boolean,
        default: false
      }
    },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>

</style>
