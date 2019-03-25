<template lang="pug">
   v-combobox(:items='items', :label="label ? label : 'Select a favorite activity or create a new one'", v-model="select ? select : selected", chips='' :disabled="disabled")
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
      type: String,
      default: 'Select Items'
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

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>

</style>
