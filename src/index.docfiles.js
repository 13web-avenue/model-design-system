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
import DocComponentPurpose from '../views/static/purpose.vue'

import CodeOfConduct from '../views/static/code-of-conduct.md'


storiesOf('About UNIFY | Introduction', module)
    .addParameters({
        options: {
            showAddonPanel: false,
            isToolshown: false
        }
    })
    .add('The UNIFY Project', () => ({
        components: { 
            'welcome': IntroductionWelcome,
            'base-layout-static': BaseStaticLayout,
        },
        template: `<welcome />`,
    }))
    .add('Value Driven Development', () => ({
        components: {
            'welcome': welcome,
            'base-layout-static': BaseStaticLayout,
        },
        template: ` <welcome />`,
    }))
    .add('Purpose & Objectives', () => ({
        components: {
            'doc-component-purpose': DocComponentPurpose,
            'base-layout-static': BaseStaticLayout,
        },
        template: ` <doc-component-purpose />`
    }))


storiesOf('About UNIFY | Introduction / Component Driven Development', module)
    .addParameters({
        options: {
            showAddonPanel: false,
        }
    })
    .add('What is Component Driven Development(CDD)?', () => ({
        components: {
            'welcome': welcome,
            'base-layout-static': BaseStaticLayout,
        },
        template: `<base-layout-static>
                    <welcome />
                </base-layout-static>`,
    }))
    .add('CDD Amaris Implementations', () => ({
        components: {
            'welcome': welcome,
            'base-layout-static': BaseStaticLayout,
        },
        template: `<base-layout-static>
                    <welcome />
                </base-layout-static>`,
    }))    


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
    .add('V1.0.0', () => ({
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

storiesOf('User Manual | UDS platform', module)
    .addParameters({
        options: {
            showAddonPanel: false,
        }
    })  
    .add('Usage', () => ({
        components: {
            'welcome': welcome,
            'base-layout-static': BaseStaticLayout,
        },
        template: `<base-layout-static>
                    <welcome />
                </base-layout-static>`,
    }))
    .addParameters({
        options: {
            showAddonPanel: false,
        },
        readme: {
            wrapperComponent: BaseStaticLayout,
            content: CodeOfConduct,
            theme: {
                textColor: '#212121'
            },
        }
    })          
    .add('Code of conduct', () => ({
        components: {
            'base-layout-static': BaseStaticLayout,
        },
        template: `<base-layout-static />`,
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
    .add('Working with pull requests', () => ({
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
    .add('Using the workflow', () => ({
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
