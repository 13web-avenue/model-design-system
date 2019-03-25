<template lang="pug">
    div
        v-text-field( :label="minimalSettings.label ? minimalSettings.label : 'Country'"
                      color="info"
                      :type="minimalSettings.type"
                      :prepend-inner-icon="minimalSettings.icon ? minimalSettings.icon : 'place'"
                      :rules="minimalSettings.rules"
                      :disabled="minimalSettings.disable ? minimalSettings.disabled : false"
                      :readonly="minimalSettings.readonly ? minimalSettings.readonly : false")
</template>

<script>

export default {
  name: 'c-inputgroups--min',
  props: {
    minimalSettings : {
        type : Object,
        default : () => {}
    }
  }
}

</script>

<style lang="scss" scoped>
    /deep/ .v-text-field {
        .v-input__control {
            .v-input__slot{
                .v-input__prepend-inner {
                    margin-left: 5px;
                    padding-right: 15px;
                }
                .v-label--active {
                    font-weight: bold;
                    color: rgba(0, 0, 0, 0.38);
                }
            }
        }
    }

</style>
