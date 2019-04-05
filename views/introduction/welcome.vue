<template lang="pug">

.welcome-note
  h1
    strong Unify Design Sytem
  p
    | CONTENTS COMING SOON...
 
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
