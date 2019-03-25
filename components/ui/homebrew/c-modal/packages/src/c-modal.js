export default {
  name: 'c-modal',
  components: {
    modal,
  },
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