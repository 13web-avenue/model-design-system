<template lang="pug">
  div
    div( class="input-group")
      v-select( v-for="(values,key) in classicPrependSettings ? classicPrependSettings : selectData" :key="key" :items="values.items"
                :value="values.value"
                :color="values.color"
                :solo="values.solo"
                :box="values.box"
                :outline="values.outline"
                :label="values.label"
              )
            
</template>

<script>

export default {
  name: 'c-inputgroups-classic--prepend',
  props: {
    classicPrependSettings : {
      type : Array,
    },
  },
  data () {
    return {
        selectData: [
          {
            items : ['Europe', 'Asia', 'Africa'],
            value : 'Europe',
            color : 'info',
            solo : true,
            box : true,
            outline : false,
            label : '',
          },
          {
            items : ['France', 'India', 'Madagascar'],
            value : 'France',
            color : 'info',
            solo : false,
            box : false,
            outline : true,
            label : 'country',
          }
        ]
    }
  }
}
</script>

<style lang="scss" scoped>
    /deep/ .input-group {
        display : flex;

        .v-text-field:nth-child(1) {
          flex-grow: inherit;
          .v-input__control {
            .v-input__slot{
              border-top-right-radius: 0;
              border-bottom-right-radius: 0;
              box-shadow: none;
              min-height: 44px;
              border-right: 0px;
            }
          }
        }

        .v-text-field:nth-child(2) {
          flex-grow: 8;
          .v-input__control {
              .v-input__slot{
                  min-height: 44px;
                  border-width: 1px;
                  border-top-left-radius: 0;
                  border-bottom-left-radius: 0;
                  border-left: 0px;
                  border-color: #E0E0E0;

                  .v-select__selections {
                    padding-top: 0px;

                    .v-select__selection--comma {
                      margin: 17px 4px 7px 0;
                    }
                  }

                  .v-input__append-inner {
                    margin-top: 8px;
                  }
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
    }

    /deep/ .theme--light.v-text-field--outline:not(.v-input--is-focused):not(.v-input--has-state){
            .v-input__control{
                .v-input__slot:hover{
                    border: 1px solid #9E9E9E;
                    border-left: 0px;
                }
            }
        }
    /deep/ .input-group{
        .v-text-field.info--text:nth-child(2) {
          .v-input__control {
              .v-input__slot{
                  border: 1px solid #2196F3;
                  border-left: 0px;
              }
          }
        }
    }
    /deep/ .input-group{
        .v-text-field.error--text:nth-child(2) {
          .v-input__control {
              .v-input__slot{
                  border: 1px solid #ff5252;
                  border-left: 0px;
              }
          }
        }
    }
    /deep/ .input-group{
        .v-text-field.warning--text:nth-child(2) {
          .v-input__control {
              .v-input__slot{
                  border: 1px solid #fb8c00;
                  border-left: 0px;
              }
          }
        }
    }
    /deep/ .input-group{
        .v-text-field.success--text:nth-child(2) {
          .v-input__control {
              .v-input__slot{
                  border: 1px solid #4caf50;
                  border-left: 0px;
              }
          }
        }
    }
</style>