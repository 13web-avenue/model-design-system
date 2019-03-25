<template lang="pug">

v-breadcrumbs(:items="items ? items : item" :large="large ? large : false")
  slot(slot="divider") >

</template>

<script>

export default {
  props: {
    items: Array,
    large: Boolean,
  },
  data () {
    return {
      item: [
        {
          text: 'Dashboard',
          disabled: false,
          href: ''
        },
        {
          text: 'Link 1',
          disabled: false,
          href: ''
        },
        {
          text: 'Link 2',
          disabled: true,
          href: ''
        }
      ]
    }
  },
}

</script>


