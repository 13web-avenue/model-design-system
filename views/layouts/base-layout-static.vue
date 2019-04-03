<template lang="pug">


div(class="layout-default")
    header(class="heading")
        h1.header-title
        .content-area
            slot
    footer(class="heading footer-note")
        h3.footnote

</template>

<script>
export default {
  name: 'BaseStaticLayout',
  props: {
    header: {
      default: 'DocFile Name',
      type: String
    },
    footer: {
      default: '',
      type: String
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.base-wrapper-border {
    padding: 21px;
}

.nonBase-wrapper-border {
    background-color: #FAFAFA;
    padding: 21px;
}

%wrapper-badge-common {
    font-size: 22px;
    vertical-align: middle;
    line-height: inherit;
    position: absolute;
    right: 0;
    top: 0;
    cursor: default;
}

%basecolor {
     color: #0984e3;
}

%uicolor {
    color: #42b983;
}

%homebrewcolor {
    color: #f27c37;
}

%Unknown-Category {
    color: red;
}

.base-wrapper-badge {
    @extend %basecolor;
    @extend %wrapper-badge-common;
}

.homebrew-wrapper-badge {
    @extend %homebrewcolor;
    @extend %wrapper-badge-common;
}

.ui-wrapper-badge {
    @extend %uicolor;
    @extend %wrapper-badge-common;
}

.Unknown-Category-wrapper-badge{
    @extend %wrapper-badge-common;
    @extend %Unknown-Category;
}

.tooltip-text {
    text-transform: uppercase;
}

header.base{
    @extend %basecolor;
    font-family: Roboto,sans-serif;
    line-height: 1.5;
    font-weight: 900 !important;
    text-transform: capitalize;
}

header.homebrew{
    @extend %homebrewcolor;
    text-transform: capitalize;
}

header.ui{
    @extend %uicolor;
    text-transform: capitalize;
}

header.Unknown-Category{
    @extend %Unknown-Category;
    text-transform: capitalize;
}


</style>
