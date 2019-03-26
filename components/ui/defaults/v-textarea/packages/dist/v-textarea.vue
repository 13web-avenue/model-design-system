<template lang="pug">
v-textarea( :value="value"
            :label="label ? label : 'Default'"
            :outline="outline ? outline : false"
            :color="color ? color : 'primary'"
            :disabled="disabled ? disabled : false"
            :readonly="readonly ? readonly : false"
            :hint="hint ? hint : 'Hint text'"
            :rules="rules"
            :class="className"
        )
</template>

<script>
 export default {
    props: {
        label: String,
        outline: Boolean,
        color: String,
        disabled: Boolean,
        readonly: Boolean,
        value: String,
        className: String,
        hint: String,
        rules: Array,
    },
 }
 </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>

</style>