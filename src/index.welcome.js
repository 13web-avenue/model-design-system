/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */
import { storiesOf } from '@storybook/vue';

import welcome from '../views/introduction/welcome.vue';

storiesOf('About Unify / Introduction', module)
    .addParameters({
        options: { showAddonPanel: false },
        info: {
            // wrapperComponent: VueInfoWrapper,
        },
    })
    .add('The Unify Project', () => ({
        components: { welcome },
        template: `<welcome />`,
    }))
    .add('Value Driven Development', () => ({
        components: { welcome },
        template: `<welcome />`,
    }))
    .add('Purpose & Objectives', () => ({
        components: { welcome },
        template: `<welcome />`,
    }))
    
storiesOf('About Unify  / Introduction', module)
    .addParameters({
        options: { showAddonPanel: false },
        info: {
            // wrapperComponent: VueInfoWrapper,
        },
    })
    .add('The Unify Project', () => ({
        components: { welcome },
        template: `<welcome />`,
    }))
    .add('Value Driven Development', () => ({
        components: { welcome },
        template: `<welcome />`,
    }))    
    .add('Purpose & Objectives', () => ({
        components: { welcome },
        template: `<welcome />`,
    }))

storiesOf('About Unify / Timelines', module)
    .addParameters({
        options: { showAddonPanel: false },
        info: {
            // wrapperComponent: VueInfoWrapper,
        },
    })
    .add('A brief history', () => ({
        components: { welcome },
        template: `<welcome />`,
    }))
    .add('State Of The Art Practises', () => ({
        components: { welcome },
        template: `<welcome />`,
    }))    
    .add('Releases', () => ({
        components: { welcome },
        template: `<welcome />`,
    }))

storiesOf('About Unify | Design System', module)
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
    .add('What is a Style Guide?', () => ({
        components: { welcome },
        template: `<welcome />`,
    }))    

storiesOf('User Manual | UDS platform', module)
    .addParameters({
        options: { showAddonPanel: false },
        info: {
            // wrapperComponent: VueInfoWrapper,
        },
    })  
    .add('Usage', () => ({
        components: { welcome },
        template: `<welcome />`,
    }))
    .add('Resources', () => ({
        components: { welcome },
        template: `<welcome />`,
    }))

storiesOf('User Manual | Collaboration', module)
    .addParameters({
        options: { showAddonPanel: false },
        info: {
            // wrapperComponent: VueInfoWrapper,
        },
    })  
    .add('Code of conduct', () => ({
        components: { welcome },
        template: `<welcome />`,
    }))
    .add('Support & Feedbacks', () => ({
        components: { welcome },
        template: `<welcome />`,
    }))
    .add('Innovate', () => ({
        components: { welcome },
        template: `<welcome />`,
    }))

    
storiesOf('User Manual | Technical Workflow', module)
    .addParameters({
        options: { showAddonPanel: false },
        info: {
            // wrapperComponent: VueInfoWrapper,
        },
    })  
    .add('Working with pull requests', () => ({
        components: { welcome },
        template: `<welcome />`,
    }))  


storiesOf('User Manual | Development Workflow', module)
    .addParameters({
        options: { showAddonPanel: false },
        info: {
            // wrapperComponent: VueInfoWrapper,
        },
    })  
    .add('Integration', () => ({
        components: { welcome },
        template: `<welcome />`,
    }))

/* eslint-enable react/react-in-jsx-scope */
