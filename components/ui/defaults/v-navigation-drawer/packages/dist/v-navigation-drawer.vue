<template lang="pug">
    v-navigation-drawer(permanent='')
      v-toolbar(flat='')
        v-list
          v-list-tile
            v-list-tile-title.title
              | Application
      v-divider
      v-list.pt-0(dense='')
        v-list-tile(v-for='item in items', :key='item.title', @click='')
          v-list-tile-action
            v-icon {{ item.icon }}
          v-list-tile-content
            v-list-tile-title {{ item.title }}
</template>

<script>

export default {
 name: 'v-navigationDrawer',
  components : {},
   data () {
      return {
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ],
        right: null
      }
    }
}

</script>


