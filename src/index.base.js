/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

/**
 * 
 *  Base components called here
 *  Reusable components called inside other stories / components
 *  -----------------------------------------------------------
 *  Author: Muniir Gopaul
 *  E-mail: mgopaul1@amaris.com
 *  Date: 26/03/2019
 *  
 */

 

import BFlag from '../core/ui-base-components/b-flag/packages/dist/b-flag.vue'

//b-flag
storiesOf('Base Components | Flag', module)
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
                'b-flag': BFlag
            },
            docsInPanel: false,
            source: false,
        },
    })
    .add('b-flag', () => ({
        components: { BFlag },
        template: `<b-flag />`,
    }))


/* eslint-enable react/react-in-jsx-scope */
