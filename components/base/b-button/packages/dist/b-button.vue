<template lang="pug">
v-checkbox(
  :label="label ? label : 'Checkbox 1'", :input-value='checkbox_status', :disabled='disable',
  )
</template>

<script>
export default {
  name: 'c-checkbox',
  props : {
    disable : {
      type : Boolean,
      default : false,
    },
    checkbox_status : {
      type : Boolean,
      default : false,
    },
    label : {
      type : String,
      default : 'Nationality',
    },
  }
}

</script>

