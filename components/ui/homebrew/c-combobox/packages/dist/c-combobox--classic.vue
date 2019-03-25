<template lang="pug">
v-combobox(  :value="value"
    :label="label"
    :outline="true"
    color="info"
    :disabled="disabled"
    :readonly="readonly"
    :chips="chips"
    :items="items ? items : ['Programming','Design','Vue','Vuetify']"
    @change="change($event)"
)
</template>

<script>
    export default {
        name: 'c-combobox--classic',
        props: {
            value: {
                type: String,
            },
             label: {
                type: String,
                default: 'Combobox',
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            readonly: {
                type: Boolean,
                default: false,
            },
            chips: {
                type: Boolean,
                default: false,
            },
            items: {
                type: Array,
            },
        },
         methods: {
            change: function(value){
                this.$emit('change',value)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    /deep/ .v-text-field--outline { 
        .v-messages {
            color: #2196F3;
        }
        .v-input__control {
            .v-label--active {
                font-weight: bold;
                color: rgba(0, 0, 0, 0.38);
            }
            .v-input__slot{
                border-width: 1px;
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