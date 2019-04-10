<template lang="pug">

base-layout-static

  section.component-wrapper
    p
      strong 
        | Unify Design System 
      | is a Design System for ERP applications that will be served as a base to build the interface & interaction on our products. It is not just a typical Style Guide, UI Kit or Pattern Library. 
    p
      | It serves as the ‘single source of truth’ for all our UI/UX  components, It will later replace the UX wiki & whitebook. 
      strong 
        | Unify Design System 
      | eventually helps us have a comprehensible design language that will provide a seamless experience for users, and improve the Scrum & Product team’s workflow.
    P
      | In this component driven development era, front-end engineering has been forever a valuable asset in Mantu's swiss army knife... 
      strong
        | Unify Design System
      |  covers the front-end standards that drives our applications client-side's strategy.

    p(class="welcome-note")
      span crafted with 
          svg(class="icon-svg-heart", viewBox="0 0 32 29.6")
            path(d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z")
      | UNIFY team



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

.component-wrapper {
  margin: 2rem;
  line-height: 1.4;
  font-family: 'Open Sans', Helvetica, "Segoe UI", Arial,sans-serif;
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
