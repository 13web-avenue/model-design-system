<template lang="pug">
  div
    div( class="input-group")
      v-text-field( :label="minimalAppendSettings.label ? minimalAppendSettings.label : 'Amount'"
                    color="info"
                    :type="minimalAppendSettings.type ? minimalAppendSettings.type : 'text'"
                    :rules="minimalAppendSettings.rules"
                    :disabled="minimalAppendSettings.disabled ? minimalAppendSettings.disabled : false"
                    :readonly="minimalAppendSettings.readonly ? minimalAppendSettings.readonly : false")
      div( class="input-group--slot has-appended")
          v-select( :items="minimalAppendSettings.selectItems ? minimalAppendSettings.selectItems : ['EUR', 'RS', 'USD']"
                    :value="minimalAppendSettings.selectValue ? minimalAppendSettings.selectValue : 'EUR'"
                    color="info"
                  )
            
</template>

<script>
export default {
  name: 'c-inputgroups-min--append',
  props: {
    minimalAppendSettings : {
         type : Object,
         default : () => {}
    }
  },
  
}
</script>

<style lang="scss" scoped>
    /deep/ .input-group {
            position: relative;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            -webkit-box-align: stretch;
            -ms-flex-align: stretch;
            align-items: stretch;
            width: 100%;

        .v-text-field {
            position: relative;
            -webkit-box-flex: 1;
            -ms-flex: 1 1 auto;
            flex: 1 1 auto;
            width: 1%;
            margin-bottom: 0;

            .v-input__control {
                .v-input__slot{
                    .v-label--active {
                        font-weight: bold;
                        color: rgba(0, 0, 0, 0.38);
                    }
                }
            }
        }
        .input-group--slot.has-appended {
            margin-left: 10px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;

            .v-input {
                position: relative;
                z-index: 2;
            }
        }
    }
</style>