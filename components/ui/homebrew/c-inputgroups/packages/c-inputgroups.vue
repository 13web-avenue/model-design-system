

<template>
    <component 
    :is="compStyle" 
    :classicSettings="classicSettings ? classicSettings : {}"
    :minimalSettings="minimalSettings ? minimalSettings : {}"
    :classicAppendSettings="classicAppendSettings ? classicAppendSettings : {}"
    :minimalAppendSettings="minimalAppendSettings ? minimalAppendSettings : {}"
    :classicPrependSettings="classicPrependSettings"
    :minimalPrependSettings="minimalPrependSettings"
    ></component>
</template>

<script>


import classic from './subComponents/c-inputgroups--classic'
import minimal from './subComponents/c-inputgroups--min.vue'
import classicAppend from './subComponents/c-inputgroups-classic--append.vue'
import minimalAppend from './subComponents/c-inputgroups-min--append.vue'
import classicPrepend from './subComponents/c-inputgroups-classic--prepend.vue'
import minimalPrepend from './subComponents/c-inputgroups-min--prepend.vue'


export default {
  name: 'c-inputgroups',
  props: {
      compStyle : {
          type : String,
          default : 'classic'
      },
      classicSettings : {
          type : Object,
          default : () => {}
      },
      minimalSettings : {
         type : Object,
          default : () => {} 
      },
      classicAppendSettings :{
          type : Object,
          default : () => {}
      },
      minimalAppendSettings : {
          type : Object,
          default : () => {}
      },
      classicPrependSettings : {
          type : Array,
      },
      minimalPrependSettings : {
          type : Array,
      }
  },
  components : {classic,minimal,classicAppend,minimalAppend,classicPrepend,minimalPrepend}
}

</script>

