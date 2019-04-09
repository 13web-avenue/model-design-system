<template lang="pug">

div(class="layout-default")
    header(class="heading")
        h1.header-title
    .content-area
        slot
    footer(class="footer-note")
        h3.footnote

</template>

<script>
 
export default {
  name: 'BaseStaticLayout'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.layout-default {
    width: 80vW;
}
</style>
