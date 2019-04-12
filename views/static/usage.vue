<template lang="pug">

base-layout-static

  h1.border-bottom Usage of the platform

  .content-area--block
    p
      strong 
        | Unify Design System 
      | is a Design System for ERP applications that will be used as a base to build the interface & interaction on our products. It is not just a typical Style Guide, UI Kit or Pattern Library. It serves as the 'single source of truth' for all our UI/UX  components.
    p
      strong 
        | Unify Design System 
      | houses a comprehensible design language that will provide a seamless experience for users, and improve the Scrum & Product team’s workflow.
    P
      | In this Component Driven Development era, front-end engineering has been more than ever a valuable asset in Mantu's toolset...<br /> 
      strong
        | Unify Design System
      |  also covers those front-end standards that powers our applications client-side's strategy.

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
