<template lang="pug">
base-layout-static
  header(class="heading")
    h4.header-title
      | HTML element type : inline
    
  p https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements

  h5 
    Strong 
      | Dealing with fluid images
  
  .body
    p
      strong
        img.img-responsive(
          src='http://lorempixel.com/1920/1080/sports/1/',
          style='max-width:100%;height:auto;',
          width='1920',
          height='1080',
          alt='my test image'
        )

    h4.header-title Test it : 
    p
      | Note that the CSS is inline for the purpose of this demo.
      | In most CSS frameworks where there is a
      strong 
        | normalize.css 
      | or a
      strong 
        | reset.css 
      | these inline CSS would show up for an image as :

    pre.code-toolbar.language-markup.
      img, object {
          max-width: 100%
      }
      img {
          height: auto
      }    
    p
      | These selectors &amp; properties should not be removed from any CSS frameworks as they are used to make fluid images

    p 
      | Images rules to follow while developping :

    ul
      li set proper width and height attributes for loading time.
      li set alternate text and do not leave it blank.
      li DO NOT set height attributes in CSS
      li
        | make an assessment on the weight of the image before pushing to production, optimization is mandatory although we need to have a balance between quality and performance.

</template>

<script>

import BaseLayoutStatic from '../../layouts/base-layout-static.vue'

export default {
  name: 'DocImages',
  components: {
    'base-layout-static': BaseLayoutStatic
  }
}

</script>


<style lang="scss" scoped>
.layout-static {

  max-width: 80rem;
  margin: 0 auto;

  > {
  font-family: 'Montserrat', sans-serif;

  }
}

/* global heading sizing */
h1 {
  font-size: 6rem;
  font-weight: bold
}

h2 {
  font-size: 3.75rem;
  font-weight: bold
}

h3 {
  font-size: 3rem;
  font-weight: bold
}

h4 {
  font-size: 2.125rem;
  font-weight: bold
}

h5 {
  font-size: 1.5rem;
  font-weight: bold
}

h6 {
  font-size: 1.25rem;
  font-weight: 600
}

.semi-bold {
  font-weight: 600;
}

.body {
  font-family: 'Open Sans', sans-serif;
}

</style>