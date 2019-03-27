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


import BButton from '../core/ui-base-components/b-button/packages/dist/b-button.vue'


storiesOf('Base Components | Button', module)
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
                'b-button': BButton
            },
            docsInPanel: false,
            source: false,
        },
    })
    .add('b-button', () => ({
        components: { BButton },
        template: `<b-button />`,
    }))

/* eslint-enable react/react-in-jsx-scope */
