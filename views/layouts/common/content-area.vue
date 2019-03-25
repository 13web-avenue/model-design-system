<template lang="pug">
    div(v-if="wrapperTypeLoader == 'base'" ,:class="[wrapperTypeLoader+'-wrapper-border','base-wrapper-border']")
        header(:class="wrapperTypeLoader")
            h1.font-weight-black {{header}}
        slot
        footer
            h3.font-weight-black {{footer}}
        v-tooltip(left='')
            v-icon(slot='activator' , :class="[wrapperTypeLoader+'-wrapper-badge']") bookmark
            span(class="tooltip-text") {{wrapperTypeLoader}} Component 
    div(v-else ,:class="[wrapperTypeLoader+'-wrapper-border','nonBase-wrapper-border']")
        v-app
            v-container(fluid)
                v-layout
                    v-flex
                        header(:class="wrapperTypeLoader")
                            h1.font-weight-black {{header}}
                        slot
                        footer
                            h3.font-weight-black {{footer}}
</template>

<script>
export default {
  name: 'ContentArea',
  props : {
    wrapperType : {
      default : 'Unknown-Category',
      type : String
    },
    header : {
      default : 'Component Name',
      type : String
    },
    footer : {
      default : '',
      type: String
    }
  },
  computed : {
    wrapperTypeLoader : function(){
      let wrapperTypes = ['base','homebrew','ui'];
      if (wrapperTypes.includes(this.wrapperType.toLowerCase()) == true){
          return this.wrapperType.toLowerCase()
      }
      return 'Unknown-Category'
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
