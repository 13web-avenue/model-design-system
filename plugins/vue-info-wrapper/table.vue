<script>
import contentarea from '../../views/layouts/common/content-area'
export default {
  props: {
    label: {
      type: String,
      default: null
    },
    components : {contentarea}
  }
}
</script>

<template>
  <div>
      <slot />
  </div>
     

</template>

<style module src="./table.css" />