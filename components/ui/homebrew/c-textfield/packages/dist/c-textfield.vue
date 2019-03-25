<template lang="pug">
    v-text-field
</template>

<script>
export default {
    name: 'c-textfield',
    props: {
        label: {
            type : String,
            default : 'Placeholder Label',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        readonly: {
            type: Boolean,
            default: false,
        },
        loading: {
            type: Boolean,
            default: false,
        },
        value: {
            type: String
        },
        rules: {
            type: Array,
        },
        type: {
            type: String,
            default: 'text',
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
/deep/ .v-text-field--outline {
    .v-input__control {
        .v-input__slot{
            min-height: 44px; //40
            border-width: 1px;
        }
        .v-label {
            background-color: transparent;
            top: 12px; //11
            padding-left: 2px;
            padding-right: 5px;
        }
        input {
            margin-top: 10px; //6
        }
        .v-label--active {
            transform: translateY(-10px) scale(.75); //-18
            font-weight: bold;
            color: rgba(0, 0, 0, 0.38);
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