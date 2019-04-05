/* eslint-disable import/no-extraneous-dependencies */

// ------------------------------------------------------------------

import { configure, addDecorator, addParameters } from '@storybook/vue'

// ------------------------------------------------------------------

import { withInfo } from 'storybook-addon-vue-info'
addDecorator(withInfo)

// ------------------------------------------------------------------

import { withA11y } from '@storybook/addon-a11y'
addDecorator(withA11y)

addParameters({

  a11y: {
    // ... axe options
    element: '#root', // optional selector which element to inspect
    config: {}, // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
    options: {} // axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)
  },
  
});

// ------------------------------------------------------------------

// addParameters({ viewport: 'responsive' });

// ------------------------------------------------------------------

import { addReadme } from 'storybook-readme/vue';
addDecorator(addReadme);

// ------------------------------------------------------------------

// Storybook & unify design system theming
// plug in the defaults or export a new theme as below
// import { themes } from '@storybook/theming'
// console.log(themes)

// Custom theme 
// default themes == themes.dark || themes.normal 
// import { themes } from '@storybook/theming'
import UnifyTheme from './unify.theme.js';


/** 
 * Importing the custom elements/components for UDS reuse
*/
// ------------------------------------------------------



/** 
 * Registering component helpers for custom UDS platform
*/
// Vue.component('content-area', ContentArea)
// ------------------------------------------------------

// Option defaults:
addParameters({
  options: {
    /**
     * sorts stories
     * @type {Boolean}
     */
    sortStoriesByKind: true,    
    /**
     * display panel that shows addon configurations
     * @type {Boolean}
     */
    showPanel: true,
    /**
     * display floating search box to search through stories
     * @type {Boolean}
     */
    showSearchBox: false,
    /**
     * show addon panel as a vertical panel on the right
     * @type {Boolean}
     */
    panelPosition : 'bottom',
    /**
     * show/hide tool bar
     * @type {Boolean}
     */
    isToolshown: true, // true by default
    /**
     * default themes
     * Custom themes will be applied form UnifyThemes
     */
      theme: UnifyTheme,
  },
})


const req = require.context('../../src/', true, /.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
