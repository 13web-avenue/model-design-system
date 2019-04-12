
<template lang="pug">

base-layout-static

  .content-area--block
    ul    
      li
        | To have a uniform & consistent user experience across our ARP applications.
      li     
        | To streamline the design & development process of the ARP.
      li
        | For design teams to waste less time & be more efficient.
      li    
        | To have enforceable UX & technical standards on our application.
      li
        | To reduce front-end bugs & responsive issues on our applications.
      li
        | For designers & developers not having to solve the same types of problems over & over again.
      li
        | To have a centralized guide for all UX & interface design standards & issues.
      li
        | To have reusable components adapted to the needs of our ARP products. 
      li
        | To have product teams in sync.
      li
        | Develop & ship products quicker.
      li
        | Provide a consistent design language for different UX designers working on different products.

</template>

<script>
import BaseLayoutStatic from '../layouts/base-layout-static.vue';

export default {
  name: 'doc-purpose',
  components: {
    'base-layout-static': BaseLayoutStatic
  }
}
</script>

<style lang="scss">



</style>
