<template lang="pug">
  contentArea(wrapperType='homebrew',header='Flag gallery')
        cflagsgallery(:gallery="gallery")
</template>

<script>
import cflagsgallery from 'c-flagsgallery/src/components/c-flagsgallery.vue'
import contentArea from '../../layouts/02/content-area';
export default {
  name: 'c-country-flag',
  data(){
    return {
      gallery : [
      {
        flags: [
            { level: 'good',
              ccode: 'in',
              country: 'india',
            },
            { ccode: 'us',
              level: 'fair',
              country: 'usa',
            },
            { level: 'good',
            ccode: 'rs',
            country: 'russia',
            },
            { ccode: 'uy',
            level: 'fair',
            country: 'uruguay',
            },
            { 
              level: 'mother-tongue',
              ccode: 'de',
              country: 'germany',
            },
            { 
              ccode: 'im',
              level: 'mother-tongue',
              country: 'isle of man',
            },
            ],
            },
            {
            flags: [
            { 
              level: 'good',
              ccode: 'ca',
              country: 'canada',
            },
            {
               ccode: 'cl',
              level: 'fair',
              country: 'chile',
            },
            { 
              level: 'good',
              ccode: 'bt',
              country: 'bhutan',
            },
            { 
              ccode: 'ar',
              level: 'fair',
              country: 'argentina',
            },
            { 
              level: 'mother-tongue',
              ccode: 'pt',
              country: 'portugal',
            },
            { 
              ccode: 'sg',
              level: 'mother-tongue',
              country: 'singapore',
            },
          ],
        },
      ],
    };
  },
  components: {
    cflagsgallery,
    contentArea
  }
}

</script>

