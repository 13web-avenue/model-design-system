<template lang="pug">
v-badge( :color="color ? color : 'primary'" :bottom="bottom ? bottom : false" :left="left ? left : false" :overlap="overlap ? overlap : false")
        span( slot="badge")
          slot( name="badge-avatar") !
        slot( name="content")
          v-icon( large, color="grey") mail
</template>

<script>

export default {
  props : {
    color : String,
    bottom : Boolean,
    left : Boolean,
    overlap : Boolean,
  }
}
</script>


