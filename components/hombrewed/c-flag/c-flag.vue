<template lang="pug">
  contentArea(wrapperType='homebrew',header='Flag')
          c-flag(:characteristics="[{level:'fluent', ccode:'it', country:'Italia'}]")
</template>

<script>
import cFlag from "c-flag/src/components/c-flag.vue";
import contentArea from "../../layouts/02/content-area";
export default {
  name: "c-country-flag",
  components: {
    cFlag,
    contentArea
  }
};
</script>

