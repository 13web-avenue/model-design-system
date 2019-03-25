<template lang="pug">
    div
       div( class="input-group")
            v-text-field( outline
                      :label="classicAppendSettings.label ? classicAppendSettings.label : 'Amount'"
                      color="info"
                      :type="classicAppendSettings.type ? classicAppendSettings.type : 'text'"
                      :rules="classicAppendSettings.rules"
                      :disabled="classicAppendSettings.disabled ? classicAppendSettings.disabled : false"
                      :readonly="classicAppendSettings.readonly ? classicAppendSettings.readonly : false")
            div( class="input-group--slot has-appended")
                v-select( :items="classicAppendSettings.selectItems ? classicAppendSettings.selectItems : ['EUR', 'RS', 'USD']" solo box
                          :value="classicAppendSettings.selectValue ? classicAppendSettings.selectValue : 'EUR'"
                          color="info"
                        )
</template>

<script>
export default {
  name: 'c-inputgroups-classic--append',
  props: {
    classicAppendSettings : {
         type : Object,
         default : () => {}
    }
  },
  data : function(){
      return {
          selected : ['EUR', 'RS', 'USD']
      }
  }
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

        &>.v-text-field {
            position: relative;
            -webkit-box-flex: 1;
            -ms-flex: 1 1 auto;
            flex: 1 1 auto;
            width: 1%;
            margin-bottom: 0;

            .v-input__control {
                .v-input__slot{
                    min-height: 44px;
                    border-width: 1px;
                    border-top-right-radius: 0;
                    border-bottom-right-radius: 0;
                    border-right: 0px;
                    border-color: #E0E0E0;
                }
                .v-label {
                    top: 12px;
                }
                input {
                    margin-top: 10px;
                }
                .v-label--active {
                    transform: translateY(-10px) scale(.75);
                    font-weight: bold;
                    color: rgba(0, 0, 0, 0.38);
                }
            }
        }
        .input-group--slot.has-appended {
            margin-left: -1px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;

            &>.v-input {
                position: relative;
                z-index: 2;
                .v-input__control {
                    .v-input__slot{
                        border-top-left-radius: 0;
                        border-bottom-left-radius: 0;
                        box-shadow: none;
                        min-height: 44px;
                    }
                }
            }
        }
    }
    /deep/ .theme--light.v-text-field--outline:not(.v-input--is-focused):not(.v-input--has-state){
        .v-input__control{
            .v-input__slot:hover{
                border: 1px solid #9E9E9E;
                border-right: 0px;
            }
        }
    }
    /deep/ .input-group{
        &>.v-text-field.info--text {
                .v-input__control {
                    .v-input__slot{
                        border: 1px solid #2196F3;
                    }
                }
                &+.input-group--slot.has-appended {
                    .v-input__control{
                        .v-input__slot{
                            background-color: #2196F3;
                            border: 1px solid #2196F3;

                            .v-select__selections, .v-icon {
                                color: #ffffff;
                            }
                        }
                    }
                }
        }  
    }
    /deep/ .input-group{
        &>.v-text-field.error--text {
                .v-input__control {
                    .v-input__slot{
                        border: 1px solid #ff5252;
                    }
                }
                &+.input-group--slot.has-appended {
                    .v-input__control{
                        .v-input__slot{
                            background-color: #ff5252;
                            border: 1px solid #ff5252;

                            .v-select__selections, .v-icon {
                                color: #ffffff;
                            }
                        }
                    }
                }
        }  
    }
    /deep/ .input-group{
        &>.v-text-field.warning--text {
                .v-input__control {
                    .v-input__slot{
                        border: 1px solid #fb8c00;
                    }
                }
                &+.input-group--slot.has-appended {
                    .v-input__control{
                        .v-input__slot{
                            background-color: #fb8c00;
                            border: 1px solid #fb8c00;

                            .v-select__selections, .v-icon {
                                color: #ffffff;
                            }
                        }
                    }
                }
        }  
    }
    /deep/ .input-group{
        &>.v-text-field.success--text {
                .v-input__control {
                    .v-input__slot{
                        border: 1px solid #4caf50;
                    }
                }
                &+.input-group--slot.has-appended {
                    .v-input__control{
                        .v-input__slot{
                            background-color: #4caf50;
                            border: 1px solid #4caf50;

                            .v-select__selections, .v-icon {
                                color: #ffffff;
                            }
                        }
                    }
                }
        }  
    }
</style>
