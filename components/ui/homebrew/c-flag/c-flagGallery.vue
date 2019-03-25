<template lang="pug">
      div
        v-layout(row='', wrap='', v-for='(value1,key1) in gallery', :key='key1')
          v-flex(v-for='(value2,key2) in value1.flags', :key='key2', xs6='', sm4='', md4='', lg2='', xl2='')
            div
              .flag-tiles
                div
                  h4.flagCountryName.text-md-center {{value2.country}}
                  .positioning(:tooltip='(value2.level=="mother-tongue") ? "Mother tongue" : value2.level', tooltip-position='buttom')
                    div(ref='flagContainer', v-if="value2.level!=''", :class='value2.level')
                      span(ref='spanContainer', :class='"flag-icon flag-icon-"+value2.ccode+" flag-icon-squared"')
                    .nolevel(ref='flagContainer', v-else='')
                      span(ref='spanContainer', :class='value2.ccode')
                v-select.fluencyLevels(@input='updateFluency(value2.level)', v-model='value2.level', :default='value2.level', :items='allLevels', label='Fluency', solo='', :hide-details='true')
</template>

<script>

const allLevels = ["fair", "good", "fluent", "mother-tongue"];

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
       badges : [{
          name : 'chrome',
          color : 'red'
        },{
          name : 'edge',
          color : 'green'
        },
        {
          name : 'firefox',
          color : 'purple'
        },
        {
          name : 'safari',
          color : 'blue'
        }
      ],
      allLevels: ["fair", "good", "fluent", "mother-tongue"],
      flagdata: {},
      characteristics: [{level:'fluent', ccode:'it', country:'Italia'}]
    };
  },
  methods: {
    updateFluency: function(fluency) {
      this.$set(this.flagdata, "level", fluency);
      this.$set(this.flagdata, "tooltip",fluency);
    }
  }
}

</script>


<style lang="scss" scoped>

[tooltip] {
  position: relative;
  display: inline-block;
}

[tooltip]::before {
  content: "";
  position: absolute;
  top: -16px;
  left: 50%;
  transform: translateX(-50%);
  border-width: 4px 6px 0 6px;
  border-style: solid;
  border-color: rgba(36, 36, 36, 36) transparent transparent transparent;
  z-index: 99;
  opacity: 0;
}

[tooltip-position="buttom"]::before {
  top: 100%;
  /*  */
  margin-top: 18px;
  margin-left: 13px;
  transform: translateX(-50%) translatey(-100%) rotate(-180deg);
}

[tooltip]::after {
  content: attr(tooltip);
  position: absolute;
  left: 50%;
  top: -6px;
  transform: translateX(-50%) translateY(-100%);
  background: rgba(36, 36, 36, 36);
  text-align: center;
  color: #fff;
  padding: 4px 2px;
  font-size: 12px;
  min-width: 80px;
  border-radius: 5px;
  pointer-events: none;
  padding: 4px 4px;
  z-index: 99;
  opacity: 0;
}

[tooltip-position="buttom"]::after {
  top: 100%;
  /*  */
  margin-top: 18px;
  margin-left: 13px;
  transform: translateX(-50%) translateY(0%);
}

[tooltip]:hover::after,
[tooltip]:hover::before {
  opacity: 1;
}

.positioning {
  padding: 5px;
  display: inline-flex;
  justify-content: space-between;
  text-transform: capitalize;
}

.mother-tongue {
  position: relative;
  border-radius: 50%;
  border: 2px solid #4cae4e;
  transform: rotate(45deg);
}

.fluent {
  position: relative;
  border-radius: 50%;
  border: 2px solid #478fcc;
  border-left-color: transparent;
  transform: rotate(45deg);
}

.good {
  position: relative;
  border-radius: 50%;
  border: 2px solid #478fcc;
  border-bottom-color: transparent;
  border-left-color: transparent;
  transform: rotate(45deg);
}

.fair {
  position: relative;
  border-radius: 50%;
  border: 2px solid #478fcc;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-left-color: transparent;
  transform: rotate(45deg);
}

.errorlevel {
  position: relative;
  border-radius: 50%;
  border: 2px solid transparent;
  transform: rotate(45deg);
  box-shadow: 0 0 0 2px #f44336;
}

.nolevel {
  position: relative;
  transform: rotate(45deg);
}

.flag-icon-background {
  background-size: contain;
  background-position: 50%;
  background-repeat: no-repeat;
}

.flag-icon {
  border: 2px solid transparent;
  background-size: contain;
  background-position: 50%;
  background-repeat: no-repeat;
  position: relative;
  display: inline-block;
  transform: rotate(-45deg);
  background-clip: content-box;
}

.flag-icon:before {
  content: "\00a0";
}

.flag-icon.flag-icon-squared {
  border-radius: 50%;
  height: 26px;
  width: 26px;
}

.flag-icon-error {
  height: 14px;
  width: 14px;
  background-color: #f44336;
  background-image: url(img/exclamation-circle.svg); 
}

.flag-icon-error.flag-icon-squared {
  background-color: #f44336;
  background-image: url(img/exclamation-circle.svg);
}

.flag-iconForError {
  border: 6px solid #f44336;
  background-size: contain;
  background-position: 50%;
  background-repeat: no-repeat;
  position: relative;
  display: inline-block;
  transform: rotate(-45deg);
  background-clip: content-box;
}

.flag-iconForError:before {
  content: "\00a0";
}

.flag-iconForError.flag-icon-squared {
  border-radius: 50%;
}
.flagCountryName {
  text-transform: capitalize;
}
.fluencyLevels {
  text-transform: capitalize;
}
.flag-icon {
  line-height: initial;
}

.flag-tiles {
  height: 110px;
  width: 120px;
  background-color: #f8f8f8;
  text-align: center;

  /deep/
    .v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
    > .v-input__control
    > .v-input__slot {
    box-shadow: none;
  }

  /deep/ .theme--light.v-text-field--solo > .v-input__control > .v-input__slot {
    background-color: #f8f8f8;
    margin-bottom: 2px;
  }

  /deep/ .v-text-field.v-text-field--solo .v-input__control {
    min-height: 20px;
    font-size: 14px;
  }

  /deep/
    .v-text-field.v-text-field--enclosed
    > .v-input__control
    > .v-input__slot {
    padding: 0 26px;
  }

  /deep/ .v-text-field .v-input__append-inner {
    padding-left: 0px;
  }
}

.flag-tiles:hover {
  border-radius: 4px;
}
</style>