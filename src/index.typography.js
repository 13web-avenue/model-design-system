/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */
import { storiesOf } from '@storybook/vue';

import typography from '../views/typography/typography.vue';


storiesOf('Typography|font', module)
    .add('Base', () => ({
        components: { typography },
        template: `<typography />`,
    }))

/* eslint-enable react/react-in-jsx-scope */
