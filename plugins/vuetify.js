/**
 *
 *  Author: Muniir Gopaul
 *  E-mail: mgopaul1@amaris.com
 *  Date: 20/03/2019
 *
 *  Description:
 *  Exporting a wrapper for Vuetify components only
 *  Wrapper can be implemented on any custom or default Vuetify components
 *  <story /> component is a registered component for Storybook/UDS platform    *
 */


import Vue from 'vue';
import Vuetify, { VFlex, VLayout, VContainer, VImg, VApp, VContent } from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
    components: { VFlex, VLayout, VContainer, VImg, VApp, VContent },
    // theme: {
    //     primary: '#ee44aa',
    //     secondary: '#424242',
    //     accent: '#82B1FF',
    //     error: '#FF5252',
    //     info: '#2196F3',
    //     success: '#4CAF50',
    //     warning: '#FFC107',
    // },
    customProperties: true,
    iconfont: 'fa',
});