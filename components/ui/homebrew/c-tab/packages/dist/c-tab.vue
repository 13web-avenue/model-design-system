<template lang="pug">
v-tabs.customTab(:value='active', slider-color='#2196F3')
  v-tab(v-for='(value,key) in tabContents', :key='key', ripple='')
    | {{ value.item }}
  v-tab-item(v-for='(value,key) in tabContents', :key='key')
    v-card(flat='')
      v-card-text {{ value.content }}        
</template>

<script>
export default {
  name: 'c-tab',
  props: {
    tabContents : {
      type: Array,
      default: ()=> [
        {
          item:'first',
          content:'This is First Tab'
        }, 
        {
          item:'second', 
          content:'This is Second Tab'
        }, 
        {
          item:'third', 
          content:'This is Third Tab'
        }
      ]
    },
    active: {
      type: Number,
      default: 0
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.customTab {
  /deep/ .v-tabs__container {
        border-bottom: 1px solid rgba(0,0,0, 0.12);
      }

  /deep/ .v-tabs__item {
    font-weight: bold;
    font-size: 14px;
    text-transform: capitalize;
    padding: 2px 36px;
    color: rgba(0,0,0, 0.38);
  }

  /deep/ .v-tabs__item:hover {
    background-color: rgba(0,0,0, 0.05);
  }

  /deep/ .v-tabs__item:active {
    background-color: rgba(0,0,0, 0.08);
  }

  /deep/ .v-tabs__item.v-tabs__item--active {
    color: #2196F3;
  }

  /deep/ .v-tabs__item:active{
    color: rgba(0,0,0, 0.38);
  }

  /deep/ .v-tabs__slider {
    height: 4px;
  }
}
</style>
