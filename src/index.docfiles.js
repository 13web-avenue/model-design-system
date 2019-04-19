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
import BaseStaticLayout from '../views/layouts/base-layout-static.vue';
import IntroductionWelcome from '../views/static/introduction.uds.vue'
import DocComponenUsage from '../views/static/usage.vue'
import DocValueDrivenDevelopment from '../views/static/value-driven-development.vue'

import DocComponentConduct from '../views/static/code-of-conduct.vue'


storiesOf('About UNIFY | Introduction', module)
    .addParameters({
        options: {
            isToolshown: false,
            showAddonPanel: false,
        }
    })
    .add('The UNIFY Project', () => ({
        components: { 
            'welcome': IntroductionWelcome,
        },
        template: `<welcome />`,
    }))
    .add('Value Driven Development', () => ({
        components: {
            'doc-value-driven-development': DocValueDrivenDevelopment,
        },
        template: `<doc-value-driven-development />`,
    }))


// storiesOf('About UNIFY | Introduction / Component Driven Development', module)
//     .addParameters({
//         options: {
//             showAddonPanel: false,
//         }
//     })
//     .add('What is Component Driven Development(CDD)?', () => ({
//         components: {
//             'welcome': welcome,
//             'base-layout-static': BaseStaticLayout,
//         },
//         template: `<base-layout-static>
//                     <welcome />
//                 </base-layout-static>`,
//     }))
//     .add('CDD Amaris Implementations', () => ({
//         components: {
//             'welcome': welcome,
//             'base-layout-static': BaseStaticLayout,
//         },
//         template: `<base-layout-static>
//                     <welcome />
//                 </base-layout-static>`,
//     }))    


// storiesOf('About Unify | Timelines', module)
//     .addParameters({
//         options: {
//             showAddonPanel: false,
//             isToolshown: false
//         },
//         info: {
//              wrapperComponent: BaseStaticLayout,
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
        }
    })
    .add('v1.0.0', () => ({
        components: {
            'welcome': welcome,
            'base-layout-static': BaseStaticLayout,
        },
        template: `<base-layout-static>
                    <welcome />
                </base-layout-static>`,
    }))


// storiesOf('About Unify | Design System', module)
//     .addParameters({
//         options: {
//             showAddonPanel: false,
//         }
//     })   
//     .add('What is a Design System?', () => ({
//         components: {
//             'welcome': welcome,
//             'base-layout-static': BaseStaticLayout,
//         },
//         template: `<base-layout-static>
//                     <welcome />
//                 </base-layout-static>`,
//     }))
//     .add('What is a Style Guide?', () => ({
//         components: {
//             'welcome': welcome,
//             'base-layout-static': BaseStaticLayout,
//         },
//         template: `<base-layout-static>
//                     <welcome />
//                 </base-layout-static>`,
//     }))    

storiesOf('User Guide | UDS platform', module)
    .addParameters({
        options: {
            isToolshown: false,
            showAddonPanel: false,
        }
    })  
    .add('Using the platform', () => ({
        components: {
            'doc-component-usage': DocComponenUsage,
        },
        template: `<doc-component-usage />`,
    }))
    .add('Code Of Conduct', () => ({
        components: {
            'doc-component-conduct': DocComponentConduct
        },
        template: `<doc-component-conduct />`,
    }))


storiesOf('User Manual | Collaboration', module)
    .addParameters({
        options: {
            showAddonPanel: false,
        }
    })
    .add('Support & Feedbacks', () => ({
        components: {
            'welcome': welcome,
            'base-layout-static': BaseStaticLayout,
        },
        template: `<base-layout-static>
                    <welcome />
                </base-layout-static>`,
    }))
    .add('Innovate', () => ({
        components: {
            'welcome': welcome,
            'base-layout-static': BaseStaticLayout,
        },
        template: `<base-layout-static>
                    <welcome />
                </base-layout-static>`,
    }))

    
storiesOf('User Manual | Contributing / Technical Workflow', module)
    .addParameters({
        options: {
            showAddonPanel: false,
        }
    })  
    .add('Working With Pull Requests', () => ({
        components: {
            'welcome': welcome,
            'base-layout-static': BaseStaticLayout,
        },
        template: `<base-layout-static>
                    <welcome />
                </base-layout-static>`,
    }))  


storiesOf('User Manual | Contributing / Tecshare Development', module)
    .addParameters({
        options: {
            showAddonPanel: false,
        }
    })
    .add('DocFile', () => ({
        components: {
            'welcome': welcome,
            'base-layout-static': BaseStaticLayout,
        },
        template: `<base-layout-static>
                    <welcome />
                </base-layout-static>`,
    }))  


storiesOf('User Manual | Development Workflow', module)
    .addParameters({
        options: { 
            showAddonPanel: false,
        }
    })
    .add('Using The Workflow', () => ({
        components: {
            'welcome': welcome,
            'base-layout-static': BaseStaticLayout,
        },
        template: `<base-layout-static>
                    <welcome />
                </base-layout-static>`,
    }))      


storiesOf('User Manual | Development Workflow / Solution Architecture ', module)
    .addParameters({
        options: {
            showAddonPanel: false,
        }
    })
    .add('UDS Component Integration', () => ({
        components: {
            'welcome': welcome,
            'base-layout-static': BaseStaticLayout,
        },
        template: `<base-layout-static>
                    <welcome />
                </base-layout-static>`,
    }))


storiesOf('Author\'s note | Contributors', module)
    .addParameters({
        options: {
            showAddonPanel: false,
        }
    })
    .add('DocFile', () => ({
        components: {
            'welcome': welcome,
            'base-layout-static': BaseStaticLayout,
        },
        template: `<base-layout-static>
                    <welcome />
                </base-layout-static>`,
    }))
/* eslint-enable react/react-in-jsx-scope */
