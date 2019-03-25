<template lang="pug">
  div
    div( class="input-group")
      v-select( v-for="(values,key) in minimalPrependSettings ? minimalPrependSettings : selectData" :key="key" :items="values.items"
                :value="values.value"
                :color="values.color"
                :label="values.label"
              )
            
</template>

<script>


export default {
  name: 'c-inputgroups-min--prepend',
  props: {
    minimalPrependSettings : {
      type : Array,
    },
  },
  data () {
      return {
          selectData: [
            {
              items : ['Europe', 'Asia', 'Africa'],
              value : 'Europe',
              color : 'info',
              label : '',
            },
            {
              items : ['France', 'India', 'Madagascar'],
              value : 'France',
              color : 'info',
              label : 'country',
            }
          ]
      }
  }
}
</script>

<style lang="scss" scoped>
    /deep/ .input-group {
        display: flex;

        .v-text-field:nth-child(1) {
          margin-right: 10px;
          flex-grow: inherit;
        }
        .v-text-field:nth-child(2) {
          flex-grow: 8;
        }
    }
</style>