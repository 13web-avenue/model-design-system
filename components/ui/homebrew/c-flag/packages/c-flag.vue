<template lang="pug">
      div
        .flag-tiles(v-if='objectDetails')
          div(v-if='flagdata.error')
            v-chip(color='#F44336', text-color='#fff')
              span.flag-iconForError.flag-icon-error.flag-icon-squared(style='position:relative;float:left; margin-left: -12px;transform: rotate(0deg);')
              | Error Fetching Flags
          div(v-else-if='flagdata.length == 1')
            h4.flagCountryName.text-md-center {{flagdata.country}}
            .positioning(:tooltip='flagdata.tooltip', tooltip-position='buttom')
              div(:class='flagdata.level')
                span(:class='flagdata.ccode')
          div(v-else='')
            h4.flagCountryName.text-md-center {{flagdata.country}}
            .positioning(:tooltip='flagdata.tooltip', tooltip-position='buttom')
              div(ref='flagContainer', v-if="flagdata.level!=''", :class='flagdata.level')
                span(ref='spanContainer', :class='flagdata.ccode')
              .nolevel(ref='flagContainer', v-else='')
                span(ref='spanContainer', :class='flagdata.ccode')
          v-select.fluencyLevels(@input='updateFluency(flagdata.level)', v-model='flagdata.level', :default='flagdata.level', :items='allLevels', label='Fluency', solo='', :hide-details='true')
        div(v-else='')
          v-chip(color='#F44336', text-color='#fff')
            span.flag-iconForError.flag-icon-error.flag-icon-squared(style='position:relative;float:left; margin-left: -12px;')
            | Error Fetching Flags
      //- v-layout(row='', wrap='')
      //-   v-flex(v-for='badge in badges', :key='badge.index', xs1='')
      //-     badges(:badgeType="badge.name", :badgeColor="badge.color" class="baseBadges")
</template>

<script>


import 'flag-icon-css/css/flag-icon.min.css';

const allLevels = ["fair", "good", "fluent", "mother-tongue"];

export default {
  name: 'c-country-flag',
  components: {},
  props : {
    ccode : {
      type : String,
    },
    level : {
      type : String,
    },
    country : {
      type : String,
    },
  },
  data : function(){
    return {
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
    }
  },
  computed: {
    objectDetails() {
      var level = "",
        ccode,
        tooltip,
        country,
        obj;
      if (this.characteristics && Array.isArray(this.characteristics)) {
        if (this.characteristics.length > 0) {
          for (var i = 0; i < this.characteristics.length; i++) {
            if (this.characteristics[i].ccode == undefined) {
              ccode = "flag-iconForError flag-icon-error flag-icon-squared";
              tooltip = "Error Fetching Flag";
              if (
                this.characteristics[i].level &&
                allLevels.includes(this.characteristics[i].level.toLowerCase())
              ) {
                level = "errorlevel";
              } else {
                level = "nolevel";
              }
              obj = {
                ccode: ccode,
                level: level,
                tooltip: tooltip
              };
            } else {
              ccode =
                "flag-icon flag-icon-" +
                this.characteristics[i].ccode +
                " flag-icon-squared";
              tooltip = this.characteristics[i].level;
              country = this.characteristics[i].country;
              if (
                this.characteristics[i].level &&
                allLevels.includes(this.characteristics[i].level.toLowerCase())
              ) {
                level = this.characteristics[i].level;
                if (this.characteristics[i].level == "mother-tongue") {
                  tooltip = "Mother Tongue";
                } 
              } else {
                level = "No level";
              }
              obj = {
                ccode: ccode,
                level: level,
                tooltip: tooltip,
                country: country
              };
            }
            this.$set(this.flagdata, "ccode", obj.ccode);
            this.$set(this.flagdata, "level", obj.level);
            this.$set(this.flagdata, "tooltip", obj.tooltip);
            this.$set(this.flagdata, "country", obj.country);
          }
        } else {
          this.$set(this.flagdata, "error", "error");
        }
      } else {
        this.$set(this.flagdata, "error", "error");
      }
      return this.flagdata;
    }
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

.baseBadges {
  width : 20px;
  height  : 20px;
}

.v-chip {
  height: 26px;
  padding-right: 0;
  font-size: 12px;
  font-weight: bold;
}

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

  
  /deep/  .v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
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

  
  /deep/  .v-text-field.v-text-field--enclosed
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


