<template lang="pug">
    v-textarea(@change="change($event)")
</template>

<script>
export default {
    name: 'c-textarea',
    props: {
        label: {
            type: String,
            default: 'Comment',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        readonly: {
            type: Boolean,
            default: false,
        },
        value: {
            type: String,
            default: 'Lorem Ipsum',
        },
        hint: {
            type: String,
            default: 'Hint!',
        },
        rules: {
            type: Array,
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
/deep/ .v-textarea { 
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
/deep/ .v-textarea.info--text {
    .v-messages {
        color: #2196F3;
    }
}
/deep/ .v-textarea.error--text {
    .v-messages {
        color: #ff5252;
    }
}
/deep/ .v-textarea.success--text {
    .v-messages {
        color: #4caf50;
    }
}
/deep/ .v-textarea.warning--text {
    .v-messages {
        color: #fb8c00;
    }
}
</style>