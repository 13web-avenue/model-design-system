<template lang="pug">

div
  h1.border-bottom What is Unify Design System?
    strong Unify Design Sytem
  p
    | Welcome to Mantu's UI Pattern Library...
  p
    | Unify Design Systems & Style Guide is the ultimate resource for front end & full stack chaps, where coding gets faster, cleaner and under the same standards !
  p(class="welcome-note")
    span crafted with
      svg.icon-svg-heart(viewBox='0 0 32 29.6')
        path(d='M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z')

    span
      | UNIFY team

</template>
<script>
import BaseLayoutStatic from '../layouts/base-layout-static.vue';

export default {
  name: 'contrib',
  components: {
    'base-layout-static': BaseLayoutStatic
  }
}
</script>

<style lang="scss" scoped>
.base-layout {
  margin: 2rem;
  line-height: 1.4;
  font-family: "Montserrat", Helvetica, "Segoe UI", Arial, freesans,sans-serif;
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
h1{
    font-family: 'Montserrat', sans-serif;
    font-size: 3rem;
    font-weight: bold;
}
p,span{
    color: #414141;
    font-family: 'Open Sans', Helvetica, "Segoe UI", Arial, sans-serif;
    font-size: 1.2rem;
    line-height: 1.5;
}
</style>
