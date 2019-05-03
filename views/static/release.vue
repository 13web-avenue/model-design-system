<template lang="pug">

base-layout-static
  h1.border-bottom Release Notes v1.0.0 - Quarter #1

  .content-area--block
    ul(class="uds-list-items")
      li.list-items--header 
        i(class="fas fa-angle-double-right")
        span.list-items-text.text-bold UDS Platform version v2.0.0
      ul(class="uds-list-items")
        li 
          i(class="fas fa-angle-double-right")
          span.list-items-text Custom components list added - Vuetify customs 
        li 
          i(class="fas fa-angle-double-right")
          span.list-items-text Default components list added - Vuetify default 
        li 
          i(class="fas fa-angle-double-right")
          span.list-items-text UX standards within components as docs 
        li 
          i(class="fas fa-angle-double-right")
          span.list-items-text Technical usage of props within components in tables
        li 
          i(class="fas fa-angle-double-right")
          span.list-items-text Navigation toolsets & panels
        li 
          i(class="fas fa-angle-double-right")
          span.list-items-text Complementatry infos in the Addons panels added at the bottom

  .content-area--block
    ul(class="uds-list-items")
      li.list-items--header 
        i(class="fas fa-angle-double-right")
        span.list-items-text.text-bold Components version v1.0.0
      ul(class="uds-list-items")
        li 
          i(class="fas fa-angle-double-right")
          span.list-items-text Setup & Change logs added
        li 
          i(class="fas fa-angle-double-right")
          span.list-items-text Repositories setup with Git Strategies
        li 
          i(class="fas fa-angle-double-right")
          span.list-items-textComponents ready for packaging

  h1.border-bottom Upcoming Features - Quarter #2
  .content-area--block
    ul(class="uds-list-items")
      li.list-items--header 
        i(class="fas fa-angle-double-right")
        span.list-items-text.text-bold Components Delivery - JSPM(JavaScript Package Management)
      ul(class="uds-list-items")
        li 
          i(class="fas fa-angle-double-right")
          span.list-items-text Distribution through Amaris NPM Proxy
        li 
          i(class="fas fa-angle-double-right")
          span.list-items-text Source code + built files inclusion in /dist folder
        li 
          i(class="fas fa-angle-double-right")
          span.list-items-text Components ready for packaging
  .content-area--block
    ul(class="uds-list-items")
      li.list-items--header 
        i(class="fas fa-angle-double-right")
        span.list-items-text.text-bold Components Delivery - JSPM(JavaScript Package Management)
      ul(class="uds-list-items")
        li 
          i(class="fas fa-angle-double-right")
          span.list-items-text Distribution through Amaris NPM Proxy & TFS repositories public
        li 
          i(class="fas fa-angle-double-right")
          span.list-items-text Source code + built files inclusion in /dist folder
        li 
          i(class="fas fa-angle-double-right")
          span.list-items-text Components ready for packaging
  .content-area--block
    ul(class="uds-list-items")
      li.list-items--header 
        i(class="fas fa-angle-double-right")
        span.list-items-text.text-bold Components version v1.0.1
      ul(class="uds-list-items")
        li 
          i(class="fas fa-angle-double-right")
          span.list-items-text Base generic & re-usable components
        li 
          i(class="fas fa-angle-double-right")
          span.list-items-text Front-end/UI/UX standards definitions


</template>

<script>
import BaseLayoutStatic from '../layouts/base-layout-static.vue';

export default {
  name: 'welcome',
  components: {
    'base-layout-static': BaseLayoutStatic
  }
}
</script>

<style lang="scss">

.uds-list-items {
  list-style: none;
  margin: 0;
  padding: 0;

  ul {
    margin-top: 1em;
    margin-left: 1.3em  
  }

  li {
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1;

    margin-bottom: .5em;
    padding: 0;

  }
}

.list-items-text {
  padding-left: .5rem;
}

</style>
