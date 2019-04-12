<script>
import hljs from 'highlight.js'
import marked from 'marked'
export default {
  props: {
    info: {
      type: Object,
      required: true
    },
    options: {
      type: Object,
      required: true
    }
  },
  computed: {
    summary() {
      if (!this.info.summary) {
        return ''
      }
      const renderer = new marked.Renderer()
      renderer.code = (code, lang) =>
        `<pre><code class="hljs">${
          hljs.highlightAuto(code, lang ? [lang] : undefined).value
        }</code></pre>`
      marked.setOptions({ renderer })
      return marked(this.info.summary)
    }
  },
  mounted() {
    this.highlight()
    const link = document.createElement('link')
    link.setAttribute('rel', 'stylesheet')
    link.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.14.2/styles/monokai.min.css')
    link.dataset.saviHead = 'true'
    document.head.appendChild(link)
  },
  beforeDestroy() {
    const link = document.head.querySelector('link[data-savi-head]')
    if (link) {
      document.head.removeChild(link)
    }
  },
  methods: {
    highlight() {
      if (!this.$refs.usage) {
        return
      }
      hljs.highlightBlock(this.$refs.usage, {
        languages: [this.info.jsxStory ? 'jsx' : 'html']
      })
    },
    getPropText(p) {
      const pretext = p.type + (p.required ? ', required' : p.default ? `, default to "${p.default}"` : '') + '. '
      // Camelized
      const pretext$ = pretext.slice(0, 1).toUpperCase() + pretext.slice(1)
      return `${p.name} | ${pretext$}${p.description}`
    },
    getEventText(e) {
      if (!e.type && !e.description) {
        return e.name
      }
      const pretext = e.type ? e.type + '. ' : ''
      return `${e.name} ... ${pretext}${e.description}`
    },
    getSlotText(s) {
      return s.description ? `${s.name} ... ${s.description}` : s.name
    }
  }
}
</script>

<template>
  <div class="layout-dynamic">
    <div class="header">
      <h1 class="title">{{ info.title }}</h1>
      <p class="subtitle">{{ info.subtitle }}</p>
    </div>
    <div>
      <slot/>
    </div>
    <div class="info-body">
      <div class="summary" v-html="summary" />
      <!--       
      <div class="usage">
        <h2 class="heading">Usage</h2>
        <pre
          ref="usage"
          class="codeblock"
        ><code>{{ info.storySource }}</code></pre>
      </div> 
      -->

      <div v-for="c in info.components" :key="c.name" class="component">
        <!-- <div v-if="c.props.length">
          <h2>Props :</h2>
          <ul class="list">
            <li v-for="p in c.props" :key="p.name" class="item">
              {{getPropText(p)}}
            </li>
          </ul>
        </div> -->
        <v-layout row>
            <v-flex xs12>
              <v-card>
                <v-toolbar color="#1EA7FD" dark height="30px;">
                  <v-toolbar-title>Props</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>

                <v-list two-line>
                  <template>
                    <div class="prop-table" v-for="(value,key) in c.props" :key="key">
                        <div v-if="value.name && (value.name !=null)" class="prop-container">
                          <span class="prop-name">Name :</span>
                          <span class="prop-value">{{value.name}}</span>
                        </div>
                        <div class="prop-container" v-if="value.type && (value.type !=null)">
                           <span class="prop-type">Type :</span>
                           <span class="prop-value">{{value.type}}</span>
                        </div>
                        <div class="prop-container" v-if="value.default && (value.default !=null)">
                          <span class="prop_default">Default:</span>
                          <span class="prop-value">{{value.default}}</span>
                        </div>
                    </div>
                  </template>
                </v-list>
              </v-card>
            </v-flex>
         </v-layout>

        <div v-if="c.events.length">
          <h3 class="subheading">Events</h3>
          <ul class="list">
            <li v-for="e in c.events" :key="e.name" class="item">
              {{ getEventText(e) }}
            </li>
          </ul>
        </div>

        <div v-if="c.slots.length">
          <h3 class="subheading">Slots</h3>
          <ul class="list">
            <li v-for="s in c.slots" :key="s.name" class="item">
              {{getSlotText(s)}}
            </li>
          </ul>
        </div>

      </div>

    </div>
  </div>
  
</template>

<style scoped src="./vue-info-wrapper.css" />
