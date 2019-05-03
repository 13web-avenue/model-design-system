<template lang="pug">

base-layout-static

  h1.border-bottom Usage of the platform

  .content-area--block
    h4.border-bottom  Preview Area

    <figure>
      <img src="../../assets/images/gif/PreviewArea.gif" alt="Preview" style="max-width: 100%;">
    </figure>

  .content-area--block
    h4.border-bottom  Navigation Area

    <figure>
      <img src="../../assets/images/gif/NavigationArea.gif" alt="Preview" style="max-width: 100%;">
    </figure>

  .content-area--block
    h4.border-bottom  Info Area

    <figure>
      <img src="../../assets/images/gif/InfoArea.gif" alt="Preview" style="max-width: 100%;">
    </figure>
    
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



</style>
