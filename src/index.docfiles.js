/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */
import { storiesOf } from '@storybook/vue';

/**
 *
 *  Author: Muniir Gopaul
 *  E-mail: mgopaul1@amaris.com
 *  Date: 20/03/2019
 *
 */

import welcome from '../views/introduction/welcome.vue';

/**
 *  Markdown
 */
import CodeOfConduct from '../views/static/code-of-conduct.md'

storiesOf('About UNIFY | Introduction', module)
    .addParameters({
        options: {
            showAddonPanel: false,
            isToolshown: false
        },
        info: {
            // base-static-layout: BaseStaticLayout,
        },
    })
    .add('The UNIFY Project', () => ({
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


storiesOf('About UNIFY  | Introduction / Component Driven Development', module)
    .addParameters({
        options: {
            showAddonPanel: false,
            isToolshown: false
        },
        info: {
            // base-static-layout: BaseStaticLayout,
        },
    })
    .add('What is Component Driven Development(CDD)?', () => ({
        components: { welcome },
        template: `<welcome />`,
    }))
    .add('CDD Amaris Implementations', () => ({
        components: { welcome },
        template: `<welcome />`,
    }))    


// storiesOf('About Unify | Timelines', module)
//     .addParameters({
//         options: {
//             showAddonPanel: false,
//             isToolshown: false
//         },
//         info: {
//             // base-static-layout: BaseStaticLayout,
//         },
//     })
//     .add('A brief history', () => ({
//         components: { welcome },
//         template: `<welcome />`,
//     }))
//     .add('What\'s next?', () => ({
//         components: { welcome },
//         template: `<welcome />`,
//     }))    
//     .add('State Of The Art Practises', () => ({
//         components: { welcome },
//         template: `<welcome />`,
//     }))    


storiesOf('About Unify | Timelines / Releases', module)
    .addParameters({
        options: {
            showAddonPanel: false,
            isToolshown: false
        },
        info: {
            // base-static-layout: BaseStaticLayout,
        },
    })
    .add('V1.0.0', () => ({
        components: { welcome },
        template: `<welcome />`,
    }))


storiesOf('About Unify | Design System', module)
    .addParameters({
        options: {
            showAddonPanel: false,
            isToolshown: false
        },
        info: {
            // base-static-layout: BaseStaticLayout,
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
        options: {
            showAddonPanel: false,
            isToolshown: false
        },
        info: {
            // base-static-layout: BaseStaticLayout,
        },
    })  
    .add('Usage', () => ({
        components: { welcome },
        template: `<welcome />`,
    }))
    .addParameters({
        options: {
            showAddonPanel: false,
            isToolshown: false
        },
        readme: {
            codeTheme: 'monokai-sublime',
            content: CodeOfConduct,
        },        
        info: {
            // base-static-layout: BaseStaticLayout,
        },
    }) 
    .add('Code of conduct', () => ({
        template: `<CodeOfConduct />`,
    }))


storiesOf('User Manual | Collaboration', module)
    .addParameters({
        options: {
            showAddonPanel: false,
            isToolshown: false
        },
        info: {
            // base-static-layout: BaseStaticLayout,
        },
    })
    .add('Support & Feedbacks', () => ({
        components: { welcome },
        template: `<welcome />`,
    }))
    .add('Innovate', () => ({
        components: { welcome },
        template: `<welcome />`,
    }))

    
storiesOf('User Manual | Contributing / Technical Workflow', module)
    .addParameters({
        options: {
            showAddonPanel: false,
            isToolshown: false
        },
        info: {
            // base-static-layout: BaseStaticLayout,
        },
    })  
    .add('Working with pull requests', () => ({
        components: { welcome },
        template: `<welcome />`,
    }))  


storiesOf('User Manual | Contributing / Tecshare Development', module)
    .addParameters({
        options: {
            showAddonPanel: false,
            isToolshown: false
        },
        info: {
            // base-static-layout: BaseStaticLayout,
        },
    })
    .add('DocFile', () => ({
        components: { welcome },
        template: `<welcome />`,
    }))  


storiesOf('User Manual | Development Workflow', module)
    .addParameters({
        options: { 
            showAddonPanel: false,
            isToolshown: false
        },
        info: {
            // base-static-layout: BaseStaticLayout,
        },
    })
    .add('Using the workflow', () => ({
        components: { welcome },
        template: `<welcome />`,
    }))      


storiesOf('User Manual | Development Workflow / Solution Architecture ', module)
    .addParameters({
        options: {
            showAddonPanel: false,
            isToolshown: false
        },
        info: {
            // base-static-layout: BaseStaticLayout,
        },
    })
    .add('UDS Component Integration', () => ({
        components: { welcome },
        template: `<welcome />`,
    }))


storiesOf('Author\'s note | Contributors', module)
    .addParameters({
        options: {
            showAddonPanel: false,
            isToolshown: false
        },
        info: {
            // base-static-layout: BaseStaticLayout,
        },
    })
    .add('DocFile', () => ({
        components: { welcome },
        template: `<welcome />`,
    }))
/* eslint-enable react/react-in-jsx-scope */
