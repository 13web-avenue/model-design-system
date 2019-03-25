<template lang="pug">
v-switch(
        :label="label ? label : 'Switch 1'", 
        :input-value='switch_status', 
        :disabled='disable'
        )
</template>

<script>

export default {
  name: 'c-toggle',
  props : {
    disable : {
      type : Boolean,
      default : false,
    },
    switch_status : {
      type : Boolean,
      default : false,
    },
    label : {
      type : String,
      default : 'On',
    },
  }
}

</script>

<style scoped>
/* off */
.v-input--switch >>> .v-input--switch__track.theme--light{
    color: #9E9E9E;
}

/* on */
.v-input--switch >>> .v-input--switch__track.theme--light.accent--text{
    color: #90CBF9 !important;
    caret-color: #90CBF9 !important;
}

.v-input--switch >>> .v-input--switch__thumb.theme--light.accent--text{
    color: #2196F3 !important;
    caret-color: #2196F3 !important;
}

/* disabled */
.theme--light.v-input--switch.v-input--is-disabled >>> div.v-input--switch__track.accent--text,
.theme--light.v-input--switch.v-input--is-disabled >>> div.v-input--switch__thumb.accent--text,
.theme--light.v-input--switch.v-input--is-disabled >>> div.v-input--switch__track,
.theme--light.v-input--switch.v-input--is-disabled >>> div.v-input--switch__thumb {
    color: #EEEEEE !important;
}

</style>

