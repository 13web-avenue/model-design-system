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

// import icons from '../views/assets-treatment/icons/icons.vue'

import assets from '../views/assets-treatment/images/images.vue'

// import BaseStaticLayout from '../views/layouts/base-layout-static.vue';

storiesOf('Icons & Assets | Images', module)
    .addParameters({
        options: { 
            showAddonPanel: false 
        },
    })  
    .add('Basics', () => ({
        components: {
            'assets': assets,
        },
        template: `<assets />`,
    }))

// storiesOf('Icons & Assets | Iconset', module)
//     .addParameters({
//         readme: {
//             codeTheme: 'monokai-sublime',
//             theme: {
//                 textColor: '#bb255a'
//             },
//         },
//         info: {
//             components: {
//                 'assets': assets,
//             },
//             docsInPanel: false,
//             source: false,
//         },
//     })
//     .add('FontAwesome v5', () => ({
//         components: { 
//             'icons': icons,
//          },
//         template: `<assets />`,
//     }))

storiesOf('Typographic Scales | Base font', module)
    .addParameters({
        options: {
            showAddonPanel: false,
            isToolshown: false
        }
    })  
    .add('Typefaces', () => ({
        components: { 
            'typo': Typography,
        },
        template: `<typo />`,
    }))
    // .add('Scaling', () => ({
    //     components: {
    //         'typo': Typography,
    //     },
    //     template: `<typo />`,
    // }))    

// storiesOf('Typographic Scales | Text Components', module)
//     .addParameters({
//         options: {
//             showAddonPanel: false,
//             isToolshown: false
//         }
//     })
//     .add('Note', () => ({
//         components: {
//             'typo': Typography,
//         },
//         template: `<typo />`,
//     }))
//     .add('Usage', () => ({
//         components: {
//             'typo': Typography,
//         },
//         template: `<typo />`,
//     })) 
/* eslint-enable react/react-in-jsx-scope */
