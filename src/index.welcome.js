/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */
import { storiesOf } from '@storybook/vue';

import welcome from '../views/introduction/welcome.vue';


storiesOf('Introduction', module)
    .add('Default', () => ({
        components: { welcome },
        template: `<welcome />`,
    }))

/* eslint-enable react/react-in-jsx-scope */
