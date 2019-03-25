<template lang="pug">
v-dialog.modal_size(v-model='dialog', scrollable='', :width='modalWidth')
  v-btn(slot='activator', color='success', dark='')  Modal
  v-card
    v-card-title.headline.m_title.grey.lighten-2(primary-title='')
      slot(name='headerTitle') Lorem ipsum
      v-btn(icon='', dark='', @click='dialog = false')
        v-icon.cls_btn close
    v-card-text.m_body(style='height:260px', :width='modalWidth')
      slot(name='contentText') Moral Person <br/> Subject to CIT but if shares are held up at least mores than 2 years: tax rate of 4%(12%*33.33%)
    v-divider
    v-card-actions
      v-spacer
      v-btn(style='margin-right:12px', :color='secondaryBtnColor', @click='dialog = false')
        slot(name='secondaryBtnText') Secondary
      v-btn(:color='primaryBtnColor', @click='dialog = false')
        v-icon check
        slot(name='primaryBtnText') Button
</template>

<script>
export default {
  name: 'c-modal',
   props: {
    primaryBtnColor: {
      type: String,
      default: 'success'
    },
    secondaryBtnColor: {
      type: String,
      default: '#E0E0E0'
    },
    modalWidth: {
      type: String,
      default: '600'
    }
  },
   data() {
      return {
        dialog: false,
      };
   }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cls_btn{
  margin-left: 800px;
}
</style>
