/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */
import { storiesOf } from '@storybook/vue';

import welcome from '../views/introduction/welcome.vue';

storiesOf('About Unify Design System | Design Systems', module)
    .addParameters({
        options: { showAddonPanel: false },
        info: {
            // wrapperComponent: VueInfoWrapper,
        },
    })  
    .add('What is a Design System?', () => ({
        components: { welcome },
        template: `<welcome />`,
    }))

storiesOf('About Unify Design System | Style Guide', module)
    .addParameters({
        options: { showAddonPanel: false },
        info: {
            // wrapperComponent: VueInfoWrapper,
        },
    })  
    .add('What is a Style Guide?', () => ({
        components: { welcome },
        template: `<welcome />`,
    }))    

storiesOf('About Unify Design System | User Manual', module)
    .addParameters({
        options: { showAddonPanel: false },
        info: {
            // wrapperComponent: VueInfoWrapper,
        },
    })  
    .add('Using UDS platform', () => ({
        components: { welcome },
        template: `<welcome />`,
    }))   
    .add('Code of conduct', () => ({
        components: { welcome },
        template: `<welcome />`,
    }))           
/* eslint-enable react/react-in-jsx-scope */
