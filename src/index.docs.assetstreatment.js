/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

/**
 * 
 *  Front-end Standards & Guidelines
 *  Treatments of reusable objects
 *  Images || Icons || Fonts
 *  -------------------------------------------------------
 *  Author: Muniir Gopaul
 *  E-mail: mgopaul1@amaris.com
 *  Original Date: 2018
 *  Last Authoring Date: 26/03/2019
 *  
 */

import Typography from '../views/assets-treatment/typography/typography.vue'

import icons from '../views/assets-treatment/icons/icons.vue'

import assets from '../views/assets-treatment/images/images.vue'


storiesOf('Assets Treatment | Images', module)
    .addParameters({
        readme: {
            codeTheme: 'monokai-sublime',
            // sidebar: BButtontSetup,
            theme: {
                textColor: '#bb255a'
            },
        },
        info: {
            components: {
                'assets': assets,
            },
            docsInPanel: false,
            source: false,
        },
    })
    .add('Default', () => ({
        components: {
            'assets': assets,
        },
        template: `<assets />`,
    }))

// storiesOf('Assets Treatment | Icons', module)
//     .addParameters({
//         readme: {
//             codeTheme: 'monokai-sublime',
//             // sidebar: BButtontSetup,
//             theme: {
//                 textColor: '#bb255a'
//             },
//         },
//         info: {
//             components: {
//                 'assets': assets,
//                 'icons': icons,
//                 'typo': Typography,
//             },
//             docsInPanel: false,
//             source: false,
//         },
//     })
//     .add('FontAwesome v4', () => ({
//         components: { 
//             'icons': icons,
//          },
//         template: `<assets />`,
//     }))

storiesOf('Assets Treatment | Typography', module)
    .addParameters({
        readme: {
            codeTheme: 'monokai-sublime',
            // sidebar: BButtontSetup,
            theme: {
                textColor: '#bb255a'
            },
        },
        info: {
            components: {
                'typo': Typography,
            },
            docsInPanel: false,
            source: false,
        },
    })    
    .add('Base Font', () => ({
        components: { 
            'typo': Typography,
        },
        template: `<typo />`,
    }))

/* eslint-enable react/react-in-jsx-scope */
