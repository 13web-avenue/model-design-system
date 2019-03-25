export default {
    name: 'c-combobox--classic',
    props: {
        value: {
            type : String,
        },
          label: {
            type : String,
            default : 'Combobox',
        },
        disabled: {
            type : Boolean,
            default : false,
        },
        readonly: {
            type : Boolean,
            default : false,
        },
        chips: {
            type : Boolean,
            default : false,
        },
        items: {
            type : Array,
        },
    },
      methods : {
        change : function(value){
            this.$emit('change',value)
        }
    }
}