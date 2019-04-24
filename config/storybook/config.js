/* eslint-disable import/no-extraneous-dependencies */
import '@fortawesome/fontawesome-free/css/all.css'


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

import '../../assets/stylesheets/cssGlobalOverrides.scss'

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
<<<<<<< HEAD
     * sorts stories
     * @type {Boolean}
     */
    // sortStoriesByKind: true,    
=======
     * show story component as full screen
     * @type {Boolean}
     */
    isFullScreen: false,
    /**
     * display panel that shows a list of stories
     * @type {Boolean}
     */
    showNav: true,
>>>>>>> master
    /**
     * display panel that shows addon configurations
     * @type {Boolean}
     */
    showPanel: true,
    /**
     * where to show the addon panel
     * @type {('bottom'|'right')}
     */
    panelPosition: 'bottom',
    /**
     * sorts stories
     * @type {Boolean}
     */
<<<<<<< HEAD
    showSearchBox: true,
=======
    sortStoriesByKind: true,
>>>>>>> master
    /**
     * regex for finding the hierarchy separator
     * @example:
     *   null - turn off hierarchy
     *   /\// - split by `/`
     *   /\./ - split by `.`
     *   /\/|\./ - split by `/` or `.`
     * @type {Regex}
     */
    hierarchySeparator: /\/|\./,
    /**
     * regex for finding the hierarchy root separator
     * @example:
     *   null - turn off multiple hierarchy roots
     *   /\|/ - split by `|`
     * @type {Regex}
     */
    hierarchyRootSeparator: /\|/,
    /**
     * sidebar tree animations
     * @type {Boolean}
     */
    sidebarAnimations: true,
    /**
     * enable/disable shortcuts
     * @type {Boolean}
     */
<<<<<<< HEAD
    isToolshown: true, // true by default
=======
    enableShortcuts: false,
    /**
     * show/hide tool bar
     * @type {Boolean}
     */
    isToolshown: true,
>>>>>>> master
    /**
     * theme storybook, see link below
     */
    theme: UnifyTheme,
  },
});

const req = require.context('../../src/', true, /.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
