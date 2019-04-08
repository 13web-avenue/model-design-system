<template lang="pug">
section.base-layout
  p
    | The UNIFY DESIGN SYSTEM is a Design System for ARP applications that will   serve as a base to build the interface & interactions on our products. It   is not just a typical Style Guide, UI Kit or Pattern Library. 
  p
    | It will serve as the ‘single source of truth’ for all our UI/UX  components, and will include all the documentation, guidelines & reference files needed. This will eventually replace the UX wiki & whitebook. The UDS eventually help us have a comprehensible design language that will provide a seamless experience for users, and improve the Scrum & Product team’s workflow.  All frontend standards will also be documented on UDS.
  p
    | The UDS will be a module owned by the UX/UI and will serve as a tool that will allow Scrum & Product teams to build better products. It is a product serving products.
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

.base-layout {
  margin: 2rem;
  line-height: 1.4;
  font-family: 'Montserrat', Helvetica, "Segoe UI", Arial,sans-serif;
  font-size: 1.3rem
}

.welcome-note {
  font-weight: 400;
  font-size: .75rem;
}

.icon-svg-heart {
  display: inline-block;
  fill: #b505a8;
  /* stroke: #000000; */
  /* stroke-width: 1px; */
  position: relative;
  /* top: 5px; */
  /* height: 14px; */
  width: 14px;
  animation: pulse 1s ease infinite;
  margin: 0 .5rem;
}

</style>
