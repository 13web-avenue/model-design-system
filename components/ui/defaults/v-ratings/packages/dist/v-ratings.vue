<template lang="pug">
v-rating( :value="value ? value : 3"
        :color="color ? color : 'primary'"
        :background-color="background_color ? background_color : 'accent'"
        :large="large ? large : false"
        :small="small ? small : false"
        :medium="medium ? medium : false"
        :x-large="x_large ? x_large : false")
</template>

<script>
export default {
  props:{
    value: Number,
    color: String,
    background_color : String,
    large: Boolean,
    small: Boolean,
    medium : Boolean,
    x_large: Boolean,
  }
}
 </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>

</style>