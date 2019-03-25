<template lang="pug">
v-layout
  v-flex(xs12='', sm6='', offset-sm3='')
    v-card
      v-img(src='https://cdn.vuetifyjs.com/images/cards/desert.jpg', aspect-ratio='2.75')
      v-card-title(primary-title='')
        div
          h3.headline.mb-0 Kangaroo Valley Safari
          div  {{ card_text }} 
      v-card-actions
        v-btn(flat='', color='orange') Share
        v-btn(flat='', color='orange') Explore
</template>

<script>

export default {
  name: 'vcard',
  components: {
  },
  data () {
    return {
      card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
    }
  },
  props : {
    append : Boolean,
    color : String,
  }
}

</script>


