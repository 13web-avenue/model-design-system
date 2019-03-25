<template lang="pug">
v-text-field( :value="value"
                :label="label ? label : 'Regular'"
                :outline="outline ? outline : false"
                :color="color ? color : 'primary'"
                :disabled="disabled ? disabled : false"
                :readonly="readonly ? readonly : false"
                :loading="loading ? loading : false"
                :rules="rules"
                :class="className"
                :type="type ? type : 'text'")
</template>

<script>
 export default {
    props: {
        label: String,
        outline: Boolean,
        color: String,
        disabled: Boolean,
        readonly: Boolean,
        loading: Boolean,
        value: String,
        rules: Array,
        className: String,
        type: String,
    },
 }
 </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>

</style>