<template lang="pug">

.welcome-note
  h1
    strong Unify Design Sytem
  p
    | Welcome to Amaris UI Pattern Library...
  p
    | Unify Design Systems & Style Guide is the ultimate resource for front end & full stack chaps, where coding gets faster, cleaner and under the same standards !
  p(class="welcome-note")
    span crafted with
      svg(class="icon-svg-heart", viewBox="0 0 496 512")
        path(d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z")
    span
      | UNIFY team
</template>
<script>
export default {
  name: 'welcome',
}
</script>

<style lang="scss">
.base-layout {
  margin: 2rem;
  line-height: 1.4;
  font-family: Segoe Ui, "Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans,sans-serif;
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
