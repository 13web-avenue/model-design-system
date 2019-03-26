<template lang="pug">
v-radio-group.customRadio(:value='selected')
  v-radio(
      v-for='(value,key) in radioOptions', 
      :key='key', 
      :label='key', 
      :value='value', 
      :disabled='disable'
    )
  </template>

<script>

export default {
  name: 'c-radio-button',
  props: {
    disable: {
      default: false
    },
    radioOptions: {
      type: Object,
      default: ()=> [{
        'Radio 1':'one',
        'Radio 2': 'two'
      }]
    },
    selected: {
      type: String,
      default: 'one'
    },
  }
}

</script>

<style scoped>
/* unselected */
.customRadio >>> .v-radio.theme--light .theme--light.v-label, .customRadio >>> .v-radio.theme--light .theme--light.v-icon {
    color: #757575;
}

/* selected */
.customRadio >>> .v-radio.theme--light.accent--text label, .customRadio >>> .v-radio.theme--light.accent--text i {
    color: #2196F3 !important;
    caret-color: #2196F3 !important;
}

.customRadio >>> .accent--text {
    color: #2196F3 !important;
    caret-color: #2196F3 !important;
}

/* disabled */
.customRadio >>> .v-radio.v-radio--is-disabled.theme--light.accent--text  i,
.customRadio >>> .v-radio.v-radio--is-disabled.theme--light.accent--text label,
.customRadio >>> .v-radio.v-radio--is-disabled.theme--light i,
.customRadio >>> .v-radio.v-radio--is-disabled.theme--light label
{
    color: #9E9E9E !important;
}
</style>


