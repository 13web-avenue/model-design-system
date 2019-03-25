<template lang="pug">
    div
       v-text-field( outline
                     :label="classicSettings.label ? classicSettings.label : 'Country'"
                     color="info"
                     :type="classicSettings.type ? classicSettings.type : 'text'"
                     :prepend-inner-icon=" classicSettings.icon ? classicSettings.icon : 'place'"
                     :rules=" classicSettings.rules"
                     :disabled="classicSettings.disabled ? classicSettings.disabled : false"
                     :readonly="classicSettings.readonly ? classicSettings.readonly : false")
</template>

<script>


export default {
  name: 'c-inputgroups--classic',
  props: {
    classicSettings : {
        type : Object,
        default : () => {}
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  /deep/ .v-text-field--outline {
        .v-input__control {
            .v-input__slot{
              padding: 0px 5px 0px 0px;
              min-height: 44px;
              border-width: 1px;

              .v-label {
                top: 12px;
                padding-left: 2px;
                padding-right: 5px;
              }
              input {
                margin-top: 10px;
              }
              .v-label--active {
                transform: translateY(-10px) scale(.75);
                font-weight: bold;
                color: rgba(0, 0, 0, 0.38);
              }
              .v-input__prepend-inner {
                margin-top: 0px;
                margin-right: 8px;
                padding-top: 8.5px;
                padding-bottom: 8.5px;
                padding-left: 10px;
                padding-right: 10px;
                background-color: #E0E0E0;
                border: 1px solid #E0E0E0;
                border-radius: 4px;
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
              }
            }
        }
  }
  /deep/ .theme--light.v-text-field--outline:not(.v-input--is-focused):not(.v-input--has-state){
        .v-input__control{
            .v-input__slot:hover{
                border: 1px solid #9E9E9E;
            }
        }
    }
    /deep/ .v-text-field.info--text {
      .v-icon.info--text {
        color: #ffffff !important;
        caret-color: #ffffff !important;
      }
      .v-input__control {
        .v-input__slot{
          .v-input__prepend-inner {
            background-color: #2196F3;
            border: 1px solid #2196F3;
          }
        }
      }
    }
    /deep/ .v-text-field.error--text {
      .v-icon.error--text {
        color: #ffffff !important;
        caret-color: #ffffff !important;
      }
      .v-input__control {
        .v-input__slot{
          .v-input__prepend-inner {
            background-color: #ff5252;
            border: 1px solid #ff5252;
          }
        }
      }
    }
    /deep/ .v-text-field.warning--text {
      .v-icon.warning--text {
        color: #ffffff !important;
        caret-color: #ffffff !important;
      }
      .v-input__control {
        .v-input__slot{
          .v-input__prepend-inner {
            background-color: #fb8c00;
            border: 1px solid #fb8c00;
          }
        }
      }
    }
    /deep/ .v-text-field.success--text {
      .v-icon.success--text {
        color: #ffffff !important;
        caret-color: #ffffff !important;
      }
      .v-input__control {
        .v-input__slot{
          .v-input__prepend-inner {
            background-color: #4caf50;
            border: 1px solid #4caf50;
          }
        }
      }
    }
    /deep/ .v-text-field--outline.v-input--is-readonly { 
        .v-input__control {
            .v-input__slot {
                background-color: #F1F1F1 !important;
            }
        }
    }
    /deep/ .v-text-field--outline.v-input--is-disabled { 
        .v-input__control {
            .v-input__slot {
                background-color: #F1F1F1 !important;
                border: 1px solid #E0E0E0;
            }
        }
    }
</style>
