/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions';

/**
 * Import component variations
 * Import .md files for:
 * 1.Notes => changelog.md
 * 2.ReadMe => setup.md
 * 3.PropsTables => component.vue file
 * 4.SlotTables => component.vue file
 */


import CToggle from '../core/ui-kit-custom-components/c-toggle/packages/dist/c-toggle.vue'
import CToggleChangelog from '../core/ui-kit-custom-components/c-toggle/c-toggle-changelog.md'
import CToggleSetup from '../core/ui-kit-custom-components/c-toggle/c-toggle-setup.md'

import CTextfield from '../core/ui-kit-custom-components/c-textfield/packages/dist/c-textfield.vue'
import CTextfieldChangelog from '../core/ui-kit-custom-components/c-textfield/c-textfield-changelog.md'
import CTextfieldSetup from '../core/ui-kit-custom-components/c-textfield/c-textfield-setup.md'

import CTextarea from '../core/ui-kit-custom-components/c-textarea/packages/dist/c-textarea.vue'
import CTextareaChangelog from '../core/ui-kit-custom-components/c-textarea/c-textarea-changelog.md'
import CTextareaSetup from '../core/ui-kit-custom-components/c-textarea/c-textarea-setup.md'

import CTab from '../core/ui-kit-custom-components/c-tab/packages/dist/c-tab.vue'
import CTabChangelog from '../core/ui-kit-custom-components/c-tab/c-tab-changelog.md'
import CTabSetup from '../core/ui-kit-custom-components/c-tab/c-tab-setup.md'

import CStatusPill from '../core/ui-kit-custom-components/c-status-pill/packages/dist/c-status-pill.vue'
import CStatusPillChangelog from '../core/ui-kit-custom-components/c-status-pill/c-status-pill-changelog.md'
import CStatusPillSetup from '../core/ui-kit-custom-components/c-status-pill/c-status-pill-setup.md'

import CModal from '../core/ui-kit-custom-components/c-modal/packages/dist/c-modal.vue'
import CModalChangelog from '../core/ui-kit-custom-components/c-modal/c-modal-changelog.md'
import CModalSetup from '../core/ui-kit-custom-components/c-modal/c-modal-setup.md'

import CComboBoxClassic from '../core/ui-kit-custom-components/c-combobox/packages/dist/c-combobox--classic.vue'
import CComboBoxClassicChangelog from '../core/ui-kit-custom-components/c-combobox/c-combobox-changelog.md'
import CComboBoxClassicSetup from '../core/ui-kit-custom-components/c-combobox/c-combobox-setup.md'

import CCallOut from '../core/ui-kit-custom-components/c-callout/packages/dist/c-callout.vue'
import CCallOutChangelog from '../core/ui-kit-custom-components/c-callout/c-callout-changelog.md'
import CCallOutSetup from '../core/ui-kit-custom-components/c-callout/c-callout-setup.md'


import CCheckBox from '../core/ui-kit-custom-components/c-checkbox/packages/dist/c-checkbox.vue'
import CCheckBoxChangelog from '../core/ui-kit-custom-components/c-checkbox/c-checkbox-changelog.md'
import CCheckBoxSetup from '../core/ui-kit-custom-components/c-checkbox/c-checkbox-setup.md'

import CRadioButton from '../core/ui-kit-custom-components/c-radio-button/packages/dist/c-radio-button.vue'
import CRadioButtonChangelog from '../core/ui-kit-custom-components/c-radio-button/c-radio-button-changelog.md'
import CRadioButtonSetup from '../core/ui-kit-custom-components/c-radio-button/c-radio-button-setup.md'

import CInputgroups from '../core/ui-kit-custom-components/c-inputgroups/packages/dist/c-inputgroups.vue'
import CInputgroupsChangelog from '../core/ui-kit-custom-components/c-inputgroups/c-inputgroups-changelog.md'
import CInputgroupsSetup from '../core/ui-kit-custom-components/c-inputgroups/c-inputgroups-setup.md'

// Add custom wrappers here 
import VueInfoWrapper from '../plugins/vue-info-wrapper/vue-info-wrapper.vue'

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css';
import "./cssGlobalOverrides.scss";

Vue.use(Vuetify)

/**
 * 
 *  Author: Muniir Gopaul
 *  E-mail: mgopaul1@amaris.com
 *  Date: 20/03/2019
 * 
 *  Description: 
 *  Exporting a wrapper for Vuetify components only
 *  Wrapper can be implemented on any custom or default Vuetify components
 *  <story /> component is a registered component for Storybook/UDS platform    *    
 */

// import the default Vuetify wrappers 
import { VApp, VContent } from 'vuetify/lib'

// add the decorator
const appDecorator = () => {
    return {
        components: { VApp, VContent },
        template: `
        <v-app>
            <v-content>
                <story/>
            </v-content>
        </v-app>
        `,
    };
};

// c-callout 
storiesOf('Library | UI KIT (vuetify custom) / c-callout', module)
    .addDecorator(appDecorator) 
    .addParameters({
        readme: {
            codeTheme: 'monokai-sublime',
            sidebar: CCallOutSetup,
            theme: {
                textColor: '#bb255a'
            },
        },
        info: {
            components: {
                'c-callout': CCallOut
            },
            docsInPanel: false,
            source: false,
            wrapperComponent: VueInfoWrapper
        },
    })  
    .add('Default', () => {
        return {
            components: {
                'c-callout': CCallOut
            },
            template: `<c-callout />`,
            propsDescription: {
                VAlert: {
                    bottom: 'Button state for disabled',
                },
            }
        };
    },
        {
            notes: CCallOutChangelog
        }
    )

// c-checkbox 
storiesOf('Library | UI KIT (vuetify custom) / c-checkbox', module)
    .addDecorator(appDecorator) 
    .addParameters({
        readme: {
            codeTheme: 'monokai-sublime',
            sidebar: CCheckBoxSetup,
            theme: {
                textColor: '#bb255a'
            },
        },
        info: {
            components: {
                'c-checkbox': CCheckBox
            },
            docsInPanel: false,
            source: false,
            wrapperComponent: VueInfoWrapper
        },
        
        
    })  
    .add('Default', () => {
        return {
            components: {
                'c-checkbox': CCheckBox
            },
            template: `<c-checkbox @change="log"/>`,
            methods: { log: action('action') },
            propsDescription: {
                CCheckBox: {
                    disable: 'Disable the input',
                    checkbox_status: 'Sets the value of the selection control component',
                    label: 'Sets input label',
                },
            }
        };
    },
        {
            notes: CCheckBoxChangelog
        }
    )

// c-combobox-classic 
storiesOf('Library | UI KIT (vuetify custom)/ c-combobox-classic', module)
    .addDecorator(appDecorator) 
    .addParameters({
        readme: {
            codeTheme: 'monokai-sublime',
            sidebar: CComboBoxClassicSetup,
            theme: {
                textColor: '#bb255a'
            },
        },
        info: {
            components: {
                'c-combobox-classic': CComboBoxClassic
            },
            docsInPanel: false,
            source: false,
            wrapperComponent: VueInfoWrapper,
        },
    })  
    .add('classic', () => {
        return {
            components: {
                'c-combobox-classic': CComboBoxClassic
            },
            template: `<c-combobox-classic @change="log"/>`,
            methods: { log: action('action') },
            propsDescription: {
                CComboBoxClassic: {
                    label: 'Sets input label',
                    disabled: 'Disable the input',
                    readonly: 'Puts input in readonly state',
                    value: 'Input value',
                    chips: 'Changes display of selections to chips',
                    items: 'Can be an array of strings',
                },
            }
        };
    },
        {
            notes: CComboBoxClassicChangelog
        }
    )

// c-inputgroups
storiesOf('Library | UI KIT (vuetify custom)/ c-inputgroups', module)
    .addDecorator(appDecorator) 
    .addParameters({
        readme: {
            codeTheme: 'monokai-sublime',
            sidebar: CInputgroupsSetup,
            theme: {
                textColor: '#bb255a'
            },
        },
        info: {
            components: {
                'c-inputgroups': CInputgroups
            },
            docsInPanel: false,
            source: false,
            // wrapperComponent: VueInfoWrapper,
        },
    })  
    .add('classic', () => {
        return {
            components: {
                'c-inputgroups': CInputgroups
            },
            template: `<c-inputgroups compStyle="classic" @change="log"/>`,
            methods:{log: action ('action')},
            propsDescription: {
                CInputgroups: {
                    label : 'Sets input label',
                    type : 'Sets input type',
                    rules : 'Accepts an array of functions that return either True or a String with an error message',
                    icon : "Prepends an icon inside the component's input",
                    disabled : 'Disable the input',
                    readonly : 'Puts input in readonly state',
                },
            }
        };
    },
        {
            notes: CInputgroupsChangelog
        }
    )
    .add('minimalist', () => {
        return {
            components: {
                'c-inputgroups': CInputgroups
            },
            template: `<c-inputgroups compStyle="minimal" @change="log"/>`,
            methods:{log: action ('action')},
            propsDescription: {
                CInputgroups: {
                    label : 'Sets input label',
                    type : 'Sets input type',
                    rules : 'Accepts an array of functions that return either True or a String with an error message',
                    icon : "Prepends an icon inside the component's input",
                    disabled : 'Disable the input',
                    readonly : 'Puts input in readonly state',
                },
            }
        };
    },
    {
        notes: CInputgroupsChangelog
    }
    )
    .add('append classic', () => {
        return {
            components: {
                'c-inputgroups': CInputgroups
            },
            template: `<c-inputgroups compStyle="classicAppend" @change="log"/>`,
            methods:{log: action ('action')},
            propsDescription: {
                CInputgroups: {
                    label : 'Sets input label',
                    type : 'Sets input type',
                    rules : 'Accepts an array of functions that return either True or a String with an error message',
                    disabled : 'Disable the input',
                    readonly : 'Puts input in readonly state',
                    selectItems : 'Can be an array of strings for Select component',
                    selectValue : 'Input value for Select component',
                },
            }
        };
    },
    {
        notes: CInputgroupsChangelog
    }
    )
    .add('append minimalist', () => {
        return {
            components: {
                'c-inputgroups': CInputgroups
            },
            template: `<c-inputgroups compStyle="minimalAppend" @change="log"/>`,
            methods:{log: action ('action')},
            propsDescription: {
                CInputgroups: {
                    label : 'Sets input label',
                    type : 'Sets input type',
                    rules : 'Accepts an array of functions that return either True or a String with an error message',
                    disabled : 'Disable the input',
                    readonly : 'Puts input in readonly state',
                    selectItems : 'Can be an array of strings for Select component',
                    selectValue : 'Input value for Select component',
                },
            }
        };
    },
    {
        notes: CInputgroupsChangelog
    }
    )
    .add('prepend classic', () => {
        return {
            components: {
                'c-inputgroups': CInputgroups
            },
            template: `<c-inputgroups compStyle="classicPrepend" @change="log"/>`,
            methods:{log: action ('action')},
            propsDescription: {
                CInputgroups: {
                    selectData : 'Accepts an array - which contains values of items, value, color, solo, box, outline, label',
                },
            }
        };
    },
    {
        notes: CInputgroupsChangelog
    }
    )
    .add('prepend minimalist', () => {
        return {
            components: {
                'c-inputgroups': CInputgroups
            },
            template: `<c-inputgroups compStyle="minimalPrepend" @change="log"/>`,
            methods:{log: action ('action')},
            propsDescription: {
                CInputgroups: {
                    selectData : 'Accepts an array - which contains values of items, value, color, solo, box, outline, label',
                },
            }
        };
    },
    {
        notes: CInputgroupsChangelog
    }
    )

// c-modal
storiesOf('Library | UI KIT (vuetify custom)/ c-modal', module)
    .addDecorator(appDecorator) 
    .addParameters({
        readme: {
            codeTheme: 'monokai-sublime',
            sidebar: CModalSetup,
            theme: {
                textColor: '#bb255a'
            },
        },
        info: {
            components: {
                'c-modal': CModal
            },
            docsInPanel: false,
            source: false,
            wrapperComponent: VueInfoWrapper,
        },
    })  
    .add('Classic', () => {
        return {
            components: {
                'c-modal': CModal
            },
            template: `<c-modal @secondaryClick="secondaryClick"        @primaryClick="primaryClick"/>`,
            methods: { secondaryClick: action(), primaryClick: action() },
            propsDescription: {
                CModal: {
                    primaryBtnColor: 'Color of the Primary Button',
                    secondaryBtnColor: 'Color of the Secondary Button',
                    modalWidth: 'Width of the Modal',
                },
            }
        };
    },
        {
            notes: CModalChangelog
        }
    )

// c-radio-button 
storiesOf('Library | UI KIT (vuetify custom)/ c-radio-button', module)
    .addDecorator(appDecorator) 
    .addParameters({
        readme: {
            codeTheme: 'monokai-sublime',
            sidebar: CRadioButtonSetup,
            theme: {
                textColor: '#bb255a'
            },
        },
        info: {
            components: {
                'c-radio-button': CRadioButton
            },
            docsInPanel: false,
            source: false,
            wrapperComponent: VueInfoWrapper,
        },
    })  
    .add('Default', () => {
        return {
            components: {
                'c-radio-button': CRadioButton
            },
            template: `<c-radio-button/>`,
            propsDescription: {
                CRadioButton: {
                    disable : 'Disable the input',
                    radioOptions : 'Sets input labels',
                    selected : 'Sets the value of the selection control component',
                },
            }
        };
    },
        {
            notes: CRadioButtonChangelog
        }
    )

// c-status-pill
storiesOf('Library | UI KIT (vuetify custom)/ c-status-pill', module)
    .addDecorator(appDecorator) 
    .addParameters({
        readme: {
            codeTheme: 'monokai-sublime',
            sidebar: CStatusPillSetup,
            theme: {
                textColor: '#bb255a'
            },
        },
        info: {
            components: {
                'c-status-pill': CStatusPill
            },
            docsInPanel: false,
            source: false,
            wrapperComponent: VueInfoWrapper,
        },
    })  
    .add('Classic', () => {
        return {
            components: {
                'c-status-pill': CStatusPill
            },
            template: `
                    <div>
                        <c-status-pill color="default">Default</c-status-pill>
                        <c-status-pill color="blue">blue</c-status-pill>
                        <c-status-pill color="green">green</c-status-pill>
                        <c-status-pill color="orange">orange</c-status-pill>
                        <c-status-pill color="red">red</c-status-pill>
                        <c-status-pill color="grey">grey</c-status-pill>
                    </div>
                `,
            propsDescription: {
                CStatusPill: {
                    color : 'Applies specified color to the control',
                },
            }
        };
    },
        {
            notes: CStatusPillChangelog
        }
    )

// c-tab
storiesOf('Library | UI KIT (vuetify custom)/ c-tab', module)
    .addDecorator(appDecorator) 
    .addParameters({
        readme: {
            codeTheme: 'monokai-sublime',
            sidebar: CTabSetup,
            theme: {
                textColor: '#bb255a'
            },
        },
        info: {
            components: {
                'c-tab': CTab
            },
            docsInPanel: false,
            source: false,
            wrapperComponent: VueInfoWrapper,
        },
    })  
    .add('Classic', () => {
        return {
            components: {
                'c-tab': CTab
            },
            template: `<c-tab @change="log($event)"/>`,
            propsDescription: {
                CTab: {
                    tabContents: "Sets tab names and it's contents",
                    active: 'Sets a tab to active state',
                },
            }
        };
    },
        {
            notes: CTabChangelog
        }
    )

// c-textarea
storiesOf('Library | UI KIT (vuetify custom)/ c-textarea', module)
    .addDecorator(appDecorator) 
    .addParameters({
        readme: {
            codeTheme: 'monokai-sublime',
            sidebar: CTextareaSetup,
            theme: {
                textColor: '#bb255a'
            },
        },
        info: {
            components: {
                'c-textarea': CTextarea
            },
            docsInPanel: false,
            source: false,
            wrapperComponent: VueInfoWrapper,
        },
    })  
    .add('Classic', () => {
        return {
            components: {
                'c-textarea': CTextarea
            },
            template: `<c-textarea @change="log"/>`,
            methods: {
                log: action()
            },
            propsDescription: {
                CTextarea: {
                    label: 'Sets input label',
                    disabled: 'Disable the input',
                    readonly: 'Puts input in readonly state',
                    value: 'Input value',
                    hint: 'Hint text',
                    rules: 'Accepts an array of functions that return either True or a String with an error message',
                },
            }
        };
    },
        {
            notes: CTextareaChangelog
        }
    )
    .add('Minimalist', () => {
        return {
            components: {
                'c-textarea': CTextarea
            },
            template: `<c-textarea @change="log"/>`,
            methods: {
                log: action()
            },
            propsDescription: {
                CTextarea: {
                    label: 'Sets input label',
                    disabled: 'Disable the input',
                    readonly: 'Puts input in readonly state',
                    value: 'Input value',
                    hint: 'Hint text',
                    rules: 'Accepts an array of functions that return either True or a String with an error message',
                },
            }
        };
    },
        {
            notes: CTextareaChangelog
        }
    )

// c-textfield
storiesOf('Library | UI KIT (vuetify custom)/ c-textfield', module)
    .addDecorator(appDecorator) 
    .addParameters({
        readme: {
            codeTheme: 'monokai-sublime',
            sidebar: CTextfieldSetup,
            theme: {
                textColor: '#bb255a'
            },
        },
        info: {
            components: {
                'c-textfield': CTextfield
            },
            docsInPanel: false,
            source: false,
            wrapperComponent: VueInfoWrapper,
        },
    })  
    .add('Classic', () => {
        return {
            components: {
                'c-textfield': CTextfield
            },
            template: `<c-textfield @change="log"/>`,
            methods: {
                log: action()
            },
            propsDescription: {
                CTextfield: {
                    label: 'Sets input label',
                    disabled: 'Disable the input',
                    readonly: 'Puts input in readonly state',
                    value: 'Input value',
                    loading: 'Displays linear progress bar.',
                    rules: 'Accepts an array of functions that return either True or a String with an error message',
                    type: 'Sets input type',
                },
            }
        };
    },
        {
            notes: CTextfieldChangelog
        }
    )
    .add('Minimalist', () => {
        return {
            components: {
                'c-textfield': CTextfield
            },
            template: `<c-textfield @change="log"/>`,
            methods: {
                log: action()
            },
            propsDescription: {
                CTextfield: {
                    label: 'Sets input label',
                    disabled: 'Disable the input',
                    readonly: 'Puts input in readonly state',
                    value: 'Input value',
                    loading: 'Displays linear progress bar',
                    rules: 'Accepts an array of functions that return either True or a String with an error message',
                    type: 'Sets input type',
                },
            }
        };
    },
        {
            notes: CTextfieldChangelog
        }
    )

// c-toggle
storiesOf('Library | UI KIT (vuetify custom) / c-toggle', module)
    .addDecorator(appDecorator) 
    .addParameters({
        readme: {
            codeTheme: 'monokai-sublime',
            sidebar: CToggleSetup,
            theme: {
                textColor: '#bb255a'
            },
        },
        info: {
            components: {
                'c-toggle': CToggle
            },
            docsInPanel: false,
            source: false,
            wrapperComponent: VueInfoWrapper,
        },
    })  
    .add('Default', () => {
        return {
            components: {
                'c-toggle': CToggle
            },
            template: `<c-toggle @change="log"/>`,
            methods: {
                log: action()
            },
            propsDescription: {
                CToggle: {
                    disable: 'Disable the input',
                    switch_status: 'Sets the value of the selection control component',
                    label: 'Sets input label',
                },
            }
        };
    },
        {
            notes: CToggleChangelog
        }
    )
/* eslint-enable react/react-in-jsx-scope */
