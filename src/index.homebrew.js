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
import CToggleContent from '../core/ui-kit-custom-components/c-toggle/c-toggle-content.md'

import CTextfield from '../core/ui-kit-custom-components/c-textfield/packages/dist/c-textfield.vue'
import CTextfieldChangelog from '../core/ui-kit-custom-components/c-textfield/c-textfield-changelog.md'
import CTextfieldSetup from '../core/ui-kit-custom-components/c-textfield/c-textfield-setup.md'
import CTextfieldContent from '../core/ui-kit-custom-components/c-textfield/c-textfield-content.md'

import CTextarea from '../core/ui-kit-custom-components/c-textarea/packages/dist/c-textarea.vue'
import CTextareaChangelog from '../core/ui-kit-custom-components/c-textarea/c-textarea-changelog.md'
import CTextareaSetup from '../core/ui-kit-custom-components/c-textarea/c-textarea-setup.md'
import CTextareaContent from '../core/ui-kit-custom-components/c-textarea/c-textarea-content.md'

import CTab from '../core/ui-kit-custom-components/c-tab/packages/dist/c-tab.vue'
import CTabChangelog from '../core/ui-kit-custom-components/c-tab/c-tab-changelog.md'
import CTabSetup from '../core/ui-kit-custom-components/c-tab/c-tab-setup.md'
import CTabContent from '../core/ui-kit-custom-components/c-tab/c-tab-content.md'

import CStatusPill from '../core/ui-kit-custom-components/c-status-pill/packages/dist/c-status-pill.vue'
import CStatusPillChangelog from '../core/ui-kit-custom-components/c-status-pill/c-status-pill-changelog.md'
import CStatusPillSetup from '../core/ui-kit-custom-components/c-status-pill/c-status-pill-setup.md'
import CStatusPillContent from '../core/ui-kit-custom-components/c-status-pill/c-status-pill-content.md'

import CModal from '../core/ui-kit-custom-components/c-modal/packages/dist/c-modal.vue'
import CModalChangelog from '../core/ui-kit-custom-components/c-modal/c-modal-changelog.md'
import CModalSetup from '../core/ui-kit-custom-components/c-modal/c-modal-setup.md'
import CModalContent from '../core/ui-kit-custom-components/c-modal/c-modal-content.md'

import CComboBoxClassic from '../core/ui-kit-custom-components/c-combobox/packages/dist/c-combobox--classic.vue'
import CComboBoxClassicChangelog from '../core/ui-kit-custom-components/c-combobox/c-combobox-changelog.md'
import CComboBoxClassicSetup from '../core/ui-kit-custom-components/c-combobox/c-combobox-setup.md'
import CComboboxContent from '../core/ui-kit-custom-components/c-combobox/c-combobox-content.md'

import CTooltip from '../core/ui-kit-custom-components/c-tooltip/packages/dist/c-tooltip.vue'
import CTooltipChangelog from '../core/ui-kit-custom-components/c-tooltip/c-tooltip-changelog.md'
import CTooltipSetup from '../core/ui-kit-custom-components/c-tooltip/c-tooltip-setup.md'
import CTooltipContent from '../core/ui-kit-custom-components/c-tooltip/c-tooltip-content.md'

import CCheckBox from '../core/ui-kit-custom-components/c-checkbox/packages/dist/c-checkbox.vue'
import CCheckBoxChangelog from '../core/ui-kit-custom-components/c-checkbox/c-checkbox-changelog.md'
import CCheckBoxSetup from '../core/ui-kit-custom-components/c-checkbox/c-checkbox-setup.md'
import CCheckBoxContent from '../core/ui-kit-custom-components/c-checkbox/c-checkbox-content.md'

import CRadioButton from '../core/ui-kit-custom-components/c-radio-button/packages/dist/c-radio-button.vue'
import CRadioButtonChangelog from '../core/ui-kit-custom-components/c-radio-button/c-radio-button-changelog.md'
import CRadioButtonSetup from '../core/ui-kit-custom-components/c-radio-button/c-radio-button-setup.md'
import CRadioButtonContent from '../core/ui-kit-custom-components/c-radio-button/c-radio-button-content.md'

import CInputGroups from '../core/ui-kit-custom-components/c-inputgroups/packages/dist/c-inputgroups.vue'
// import CInputGroupsChangelog from '../core/ui-kit-custom-components/c-inputgroups/c-inputgroups-changelog.md'
import CInputGroupsSetup from '../core/ui-kit-custom-components/c-inputgroups/c-inputgroups-setup.md'
import CInputGroupsContent from '../core/ui-kit-custom-components/c-inputgroups/c-inputgroups-content.md'

import CButton from '../core/ui-kit-custom-components/c-button/packages/dist/c-button.vue'
import CButtonChangelog from '../core/ui-kit-custom-components/c-button/c-button-changelog.md'
import CButtonSetup from '../core/ui-kit-custom-components/c-button/c-button-setup.md'
import CButtonContent from '../core/ui-kit-custom-components/c-button/c-button-content.md'
import CButtonSolidContent from '../core/ui-kit-custom-components/c-button/c-button-solid-content.md'

// Add custom wrappers here 
import VueInfoWrapper from '../plugins/vue-info-wrapper/vue-info-wrapper.vue'

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify, {
    iconfont: 'fa' // 'md' || 'mdi' || 'fa' || 'fa4'
})

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
import { VApp, VContainer, VLayout, VFlex } from 'vuetify/lib'

// add the decorator
const appDecorator = () => {
    return {
        components: { VApp, VContainer, VLayout, VFlex },
        template: `
        <v-app>
            <v-container fluid>
                <v-layout>
                    <v-flex>
                        <story/>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-app>
        `,
    };
};

//c-button
storiesOf('UI COMPONENT | Vuetify Custom / Button', module)
    .addDecorator(appDecorator) 
    .addParameters({
        info: {
            components: {
                'c-button': CButton,
            },
            docsInPanel: false,
            source: false,
            summary: CButtonContent,
            wrapperComponent: VueInfoWrapper
        },
        readme: {
            codeTheme: 'monokai-sublime',
            sidebar: CButtonSetup,
            theme: {
                textColor: 'black'
            }
        },
        options: {
            isToolshown: false,
            showAddonPanel: false,
        }        
    })  
    .add('General Information', () => {
        return {
            components: {
                'c-button': CButton
            },
            template: `<div>
                        <div style="display:none">
                            <c-button comp="iconButton" :iconButtonSettings="{color:'#2196F3',state:false, iconName:'fas fa-search'}" />
                            <c-button comp="iconButton" :iconButtonSettings="{color:'#4CAF50',state:false, iconName:'fas fa-check'}" />
                            <c-button comp="iconButton" :iconButtonSettings="{color:'#FF9800',state:false, iconName:'fas fa-exclamation'}" />
                            <c-button comp="iconButton" :iconButtonSettings="{color:'#F44336',state:false, iconName:'fas fa-trash-alt'}" />
                            <c-button comp="iconButton" :iconButtonSettings="{color:'#757575',state:false, iconName:'fas fa-times'}" />
                        </div>
                        <div style="display:none">
                            <c-button comp="iconButton" :iconButtonSettings="{state:true, iconName:'fas fa-search'}" />
                            <c-button comp="iconButton" :iconButtonSettings="{state:true, iconName:'fas fa-check'}" />
                            <c-button comp="iconButton" :iconButtonSettings="{state:true, iconName:'fas fa-exclamation'}" />
                            <c-button comp="iconButton" :iconButtonSettings="{state:true, iconName:'fas fa-trash-alt'}" />
                            <c-button comp="iconButton" :iconButtonSettings="{state:true, iconName:'fas fa-times'}" />
                        </div>
                    </div>`,
            // propsDescription: {
            //     CButton: {
            //         iState: 'Button state for disabled',
            //         iconColor: 'color of btn to be shown'
            //     },
            // }
        };
    },
        {
            notes: CButtonChangelog
        }
    )
    .addParameters({
        info: {
            components: {
                'c-button': CButton,
            },
            docsInPanel: false,
            source: false,
            // summary: CButtonContent,
            wrapperComponent: VueInfoWrapper
        },
        readme: {
            codeTheme: 'monokai-sublime',
            sidebar: CButtonSetup,
            theme: {
                textColor: 'black'
            }
        },
        options: {
            isToolshown: true,
            showAddonPanel: true,
        }          
    })      
    .add('Icon', () => {
        return {
            components: {
                'c-button': CButton
            },
            template: `<div>
                        <div>
                            <c-button comp="iconButton" :iconButtonSettings="{color:'#2196F3',state:false, iconName:'fas fa-search'}" />
                            <c-button comp="iconButton" :iconButtonSettings="{color:'#4CAF50',state:false, iconName:'fas fa-check'}" />
                            <c-button comp="iconButton" :iconButtonSettings="{color:'#FF9800',state:false, iconName:'fas fa-exclamation'}" />
                            <c-button comp="iconButton" :iconButtonSettings="{color:'#F44336',state:false, iconName:'fas fa-trash-alt'}" />
                            <c-button comp="iconButton" :iconButtonSettings="{color:'#757575',state:false, iconName:'fas fa-times'}" />
                        </div>
                        <div>
                            <c-button comp="iconButton" :iconButtonSettings="{state:true, iconName:'fas fa-search'}" />
                            <c-button comp="iconButton" :iconButtonSettings="{state:true, iconName:'fas fa-check'}" />
                            <c-button comp="iconButton" :iconButtonSettings="{state:true, iconName:'fas fa-exclamation'}" />
                            <c-button comp="iconButton" :iconButtonSettings="{state:true, iconName:'fas fa-trash-alt'}" />
                            <c-button comp="iconButton" :iconButtonSettings="{state:true, iconName:'fas fa-times'}" />
                        </div>
                    </div>`,
            propsDescription: {
                CButton: {
                    iState: 'Button state for disabled',
                    iconColor: 'color of btn to be shown'
                },
            }
        };
    },
        {
            notes: CButtonChangelog
        }
    )    
    .add('Loading', () => {
        return {
            components: {
                'c-button': CButton
            },
            template: `<div>
                        <div>
                            <c-button comp="loadingButton" :loadingButtonSettings="{color:'#4CAF50',bState:false,icnName:'fab fa-telegram-plane',btnName:'Send'}" />
                            <c-button comp="loadingButton" :loadingButtonSettings="{color:'#2196F3',bState:false,icnName:'fab fa-telegram-plane',btnName:'Send'}" />
                            <c-button comp="loadingButton" :loadingButtonSettings="{color:'#F44336',bState:false,icnName:'fas fa-bomb',btnName:'Destroy'}" />
                        </div>
                        <div>
                            <c-button comp="loadingButton" :loadingButtonSettings="{color:'#4CAF50',bState:false,icnName:'fab fa-telegram-plane',btnName:'Send',clas:'noshadow'}" />
                            <c-button comp="loadingButton" :loadingButtonSettings="{color:'#2196F3',bState:false,icnName:'fab fa-telegram-plane',btnName:'Send',clas:'noshadow'}" />
                            <c-button comp="loadingButton" :loadingButtonSettings="{color:'#F44336',bState:false,icnName:'fas fa-bomb',btnName:'Destroy',clas:'noshadow'}" />
                        </div>
                        <div>
                            <c-button comp="loadingButton" :loadingButtonSettings="{bState:true,icnName:'fab fa-telegram-plane',btnName:'Send'}" />
                            <c-button comp="loadingButton" :loadingButtonSettings="{bState:true,icnName:'fab fa-telegram-plane',btnName:'Send'}" />
                            <c-button comp="loadingButton" :loadingButtonSettings="{bState:true,icnName:'fas fa-bomb',btnName:'Destroy'}" />
                        </div>
                    </div>`,
            propsDescription: {
                CButton: {
                    bState: 'Button state for disabled',
                    btnColor: 'color of btn to be shown',
                    noshadow : 'Hide shadow'
                },
            }
        };
    },
        {
            notes: CButtonChangelog
        }
    )
    .addParameters({
        info: {
            components: {
                'c-button': CButton,
            },
            docsInPanel: false,
            source: false,
            summary: CButtonSolidContent,
            wrapperComponent: VueInfoWrapper
        },
        readme: {
            codeTheme: 'monokai-sublime',
            sidebar: CButtonSetup,
            theme: {
                textColor: 'black'
            }
        }
    })      
    .add('Solid', () => {
        return {
            components: {
                'c-button': CButton
            },
            template: `<div>
                        <div>
                            <c-button comp="solidButton" :solidButtonSettings="{color:'#2196F3',bState:false, btnName:'Primary'}" />
                            <c-button comp="solidButton" :solidButtonSettings="{color:'#4CAF50',bState:false,btnName:'Success'}" />
                            <c-button comp="solidButton" :solidButtonSettings="{color:'#FF9800',bState:false,btnName:'Warning'}" />
                            <c-button comp="solidButton" :solidButtonSettings="{color:'#F44336',bState:false,btnName:'Danger'}" />
                            <c-button comp="solidButton" :solidButtonSettings="{color:'#757575',bState:false,btnName:'Secondary'}" />                 
                        </div>
                        <div>
                            <c-button  comp="solidButton" :solidButtonSettings="{color:'#2196F3',bState:false,btnName:'Primary',clas:'noshadow'}" />
                            <c-button  comp="solidButton" :solidButtonSettings="{color:'#4CAF50',bState:false,btnName:'Success',clas:'noshadow'}" />
                            <c-button  comp="solidButton" :solidButtonSettings="{color:'#FF9800',bState:false,btnName:'Warning',clas:'noshadow'}" />
                            <c-button  comp="solidButton" :solidButtonSettings="{color:'#F44336',bState:false,btnName:'Danger',clas:'noshadow'}" />
                            <c-button  comp="solidButton" :solidButtonSettings="{color:'#757575',bState:false,btnName:'Secondary',clas:'noshadow'}" />                 
                        </div>
                        <div>
                            <c-button  comp="solidButton" :solidButtonSettings="{bState:true,btnName:'Primary'}" />
                            <c-button  comp="solidButton" :solidButtonSettings="{bState:true,btnName:'Success'}" />
                            <c-button  comp="solidButton" :solidButtonSettings="{bState:true,btnName:'Warning'}" />
                            <c-button  comp="solidButton" :solidButtonSettings="{bState:true,btnName:'Danger'}" />
                            <c-button  comp="solidButton" :solidButtonSettings="{bState:true,btnName:'Secondary'}" />                 
                        </div> 
                    </div>`,
            propsDescription: {
                CButton: {
                    bState: 'Button state for disabled',
                    btnColor: 'color of btn to be shown',
                    noshadow: 'Hide shadow'
                },
            }
        };
    },
        {
            notes: CButtonChangelog
        }
    )
    .addParameters({
        info: {
            components: {
                'c-button': CButton,
            },
            docsInPanel: false,
            source: false,
            // summary: CButtonSolidContent,
            wrapperComponent: VueInfoWrapper
        },
        readme: {
            codeTheme: 'monokai-sublime',
            sidebar: CButtonSetup,
            theme: {
                textColor: 'black'
            }
        }
    })      
    .add('Text', () => {
        return {
            components: {
                'c-button': CButton
            },
            template: `<div>
                        <div>
                            <c-button comp="textButton" :textButtonSettings="{color:'#2196F3',bState:false, btnName:'Primary'}" />
                            <c-button comp="textButton" :textButtonSettings="{color:'#4CAF50',bState:false, btnName:'Success'}" />
                            <c-button comp="textButton" :textButtonSettings="{color:'#FF9800',bState:false, btnName:'Warning'}" />
                            <c-button comp="textButton" :textButtonSettings="{color:'#F44336',bState:false, btnName:'Danger'}" />
                            <c-button comp="textButton" :textButtonSettings="{color:'#757575',bState:false, btnName:'Secondary'}" />                 
                        </div>
                        <div>
                            <c-button comp="textButton" :textButtonSettings="{bState:true, btnName:'Primary'}" />
                            <c-button comp="textButton" :textButtonSettings="{bState:true, btnName:'Success'}" />
                            <c-button comp="textButton" :textButtonSettings="{bState:true, btnName:'Warning'}" />
                            <c-button comp="textButton" :textButtonSettings="{bState:true, btnName:'Danger'}" />
                            <c-button comp="textButton" :textButtonSettings="{bState:true, btnName:'Secondary'}" />                 
                        </div>     
                    </div>`,
            propsDescription: {
                CButton: {
                    bState: 'Button state for disabled',
                    btnColor: 'color of btn to be shown'
                },
            }
        };
    },
        {
            notes: CButtonChangelog
        }
    )
    .add('Outlined', () => {
        return {
            components: {
                'c-button': CButton
            },
            template: `<div>
                        <div>
                            <c-button comp="outlined" :outlinedSettings="{color:'#2196F3',bState:false, btnName:'Primary'}" />
                            <c-button comp="outlined" :outlinedSettings="{color:'#4CAF50',bState:false, btnName:'Success'}" />
                            <c-button comp="outlined" :outlinedSettings="{color:'#FF9800',bState:false, btnName:'Warning'}" />
                            <c-button comp="outlined" :outlinedSettings="{color:'#F44336',bState:false, btnName:'Danger'}" />
                            <c-button comp="outlined" :outlinedSettings="{color:'#757575',bState:false, btnName:'Secondary'}" />                 
                        </div>
                        <div>
                            <c-button comp="outlined" :outlinedSettings="{bState:true, btnName:'Primary'}" />
                            <c-button comp="outlined" :outlinedSettings="{bState:true, btnName:'Success'}" />
                            <c-button comp="outlined" :outlinedSettings="{bState:true, btnName:'Warning'}" />
                            <c-button comp="outlined" :outlinedSettings="{bState:true, btnName:'Danger'}" />
                            <c-button comp="outlined" :outlinedSettings="{bState:true, btnName:'Secondary'}" />                 
                        </div>  
                    </div>`,
            propsDescription: {
                CButton: {
                    bState: 'Button state for disabled',
                    btnColor: 'color of btn to be shown'
                },
            }
        };
    },
        {
            notes: CButtonChangelog
        }
    )
    .add('Rounded Outlined', () => {
        return {
            components: {
                'c-button': CButton
            },
            template: `<div>
                        <div>
                            <c-button comp="outlineRounded" :outlineRoundedSettings="{color:'#2196F3',bState:false, iconName:'fas fa-search'}" />
                            <c-button comp="outlineRounded" :outlineRoundedSettings="{color:'#4CAF50',bState:false, iconName:'fas fa-check'}" />
                            <c-button comp="outlineRounded" :outlineRoundedSettings="{color:'#FF9800',bState:false, iconName:'fas fa-exclamation'}" />
                            <c-button comp="outlineRounded" :outlineRoundedSettings="{color:'#F44336',bState:false, iconName:'fas fa-trash-alt'}" />
                            <c-button comp="outlineRounded" :outlineRoundedSettings="{color:'#757575',bState:false, iconName:'fas fa-times'}" />                 
                        </div>
                        <div>
                            <c-button comp="outlineRounded" :outlineRoundedSettings="{bState:true, iconName:'fas fa-search'}" />
                            <c-button comp="outlineRounded" :outlineRoundedSettings="{bState:true, iconName:'fas fa-check'}" />
                            <c-button comp="outlineRounded" :outlineRoundedSettings="{bState:true, iconName:'fas fa-exclamation'}" />
                            <c-button comp="outlineRounded" :outlineRoundedSettings="{bState:true, iconName:'fas fa-trash-alt'}" />
                            <c-button comp="outlineRounded" :outlineRoundedSettings="{bState:true, iconName:'fas fa-times'}" />                 
                        </div>   
                    </div>`,
            propsDescription: {
                CButton: {
                    bState: 'Button state for disabled',
                    btnColor: 'color of btn to be shown'
                },
            }
        };
    },
        {
            notes: CButtonChangelog
        }
    )
    .add('Rounded Solid', () => {
        return {
            components: {
                'c-button': CButton
            },
            template: `<div>
                        <div>
                            <c-button comp="solidRounded" :solidRoundedSettings="{color:'#2196F3',bState:false,iconName:'fas fa-search'}" />
                            <c-button comp="solidRounded" :solidRoundedSettings="{color:'#4CAF50',bState:false,iconName:'fas fa-check'}" />
                            <c-button comp="solidRounded" :solidRoundedSettings="{color:'#FF9800',bState:false,iconName:'fas fa-exclamation'}" />
                            <c-button comp="solidRounded" :solidRoundedSettings="{color:'#F44336',bState:false,iconName:'fas fa-trash-alt'}" />
                            <c-button comp="solidRounded" :solidRoundedSettings="{color:'#757575',bState:false,iconName:'fas fa-times'}" />  
                        </div>
                        <div>
                            <c-button comp="solidRounded" :solidRoundedSettings="{color:'#2196F3',bState:false, iconName:'fas fa-search', clas:'noshadow'}" />
                            <c-button comp="solidRounded" :solidRoundedSettings="{color:'#4CAF50',bState:false, iconName:'fas fa-check', clas:'noshadow'}" />
                            <c-button comp="solidRounded" :solidRoundedSettings="{color:'#FF9800',bState:false, iconName:'fas fa-exclamation', clas:'noshadow'}" />
                            <c-button comp="solidRounded" :solidRoundedSettings="{color:'#F44336',bState:false, iconName:'fas fa-trash-alt', clas:'noshadow'}" />
                            <c-button comp="solidRounded" :solidRoundedSettings="{color:'#757575',bState:false, iconName:'fas fa-times', clas:'noshadow'}" />  
                        </div>
                        <div>
                            <c-button comp="solidRounded" :solidRoundedSettings="{bState:true,iconName:'fas fa-search'}" />
                            <c-button comp="solidRounded" :solidRoundedSettings="{bState:true,iconName:'fas fa-check'}" />
                            <c-button comp="solidRounded" :solidRoundedSettings="{bState:true,iconName:'fas fa-exclamation'}" />
                            <c-button comp="solidRounded" :solidRoundedSettings="{bState:true,iconName:'fas fa-trash-alt'}" />
                            <c-button comp="solidRounded" :solidRoundedSettings="{bState:true,iconName:'fas fa-times'}" />                 
                        </div>    
                    </div>`,
            propsDescription: {
                CButton: {
                    iState: 'Button state for disabled',
                    iconColor: 'color of btn to be shown',
                    noshadow : 'Hide shadow'
                },
            }
        };
    },
        {
            notes: CButtonChangelog
        }
    )

// c-checkbox 
storiesOf('UI COMPONENT | Vuetify Custom/Checkbox', module)
    .addDecorator(appDecorator) 
    .addParameters({
        readme: {
            codeTheme: 'monokai-sublime',
            sidebar: CCheckBoxSetup,
        },
        info: {
            components: {
                'c-checkbox': CCheckBox
            },
            docsInPanel: false,
            source: false,
            summary: CCheckBoxContent,
            wrapperComponent: VueInfoWrapper
        },
        
        
    })  
    .add('Default', () => {
        return {
            components: {
                'c-checkbox': CCheckBox
            },
            template: `<div>
                        <c-checkbox @change="log" id="First" label="First"/>
                        <c-checkbox @change="log" id="Second" label="Second" :selected=true />
                        <c-checkbox @change="log" id="Third" label="Third"/>
                        <c-checkbox @change="log" id="Fourth" label="Fourth"/>
                        <c-checkbox @change="log" id="Fifth" label="Disabled" :disable=true />
                        <c-checkbox @change="log" id="Sixth" label="Partially Selected [Indeterminate]" :indeterminate=true />
                      </div>`,
            methods: { log: function(value) {
                console.log(value)
            } },
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
storiesOf('UI COMPONENT | Vuetify Custom / Combobox-classic', module)
    .addDecorator(appDecorator) 
    .addParameters({
        readme: {
            codeTheme: 'monokai-sublime',
            sidebar: CComboBoxClassicSetup,
        },
        info: {
            components: {
                'c-combobox-classic': CComboBoxClassic
            },
            docsInPanel: false,
            source: false,
            summary: CComboboxContent,
            wrapperComponent: VueInfoWrapper,
        },
    })  
    .add('Classic', () => {
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
storiesOf('UI COMPONENT   | Vuetify Custom  /  Input-groups', module)
    .addDecorator(appDecorator) 
    .addParameters({
        readme: {
            codeTheme: 'monokai-sublime',
            sidebar : CInputGroupsSetup
        },
        info: {
            components: {
                'c-input-groups': CInputGroups
            },
            docsInPanel: false,
            source: false,
            summary: CInputGroupsContent,
            wrapperComponent: VueInfoWrapper,
        },
    })  
    .add('Classic', () => {
        return {
            components: {
                'c-input-groups': CInputGroups
            },
            template: `<c-input-groups compStyle="classic" @change="log"/>`,
            methods:{log: action ('action')},
            propsDescription: {
                CInputGroups: {
                    label : 'Sets input label',
                    type : 'Sets input type',
                    rules : 'Accepts an array of functions that return either True or a String with an error message',
                    icon : "Prepends an icon inside the component's input",
                    disabled : 'Disable the input',
                    readonly : 'Puts input in readonly state',
                },
            }
        };
    }
    )
    .add('Minimalist', () => {
        return {
            components: {
                'c-inputgroups': CInputGroups
            },
            template: `<c-inputgroups compStyle="minimal" @change="log"/>`,
            methods:{log: action ('action')},
            propsDescription: {
                CInputGroups: {
                    label : 'Sets input label',
                    type : 'Sets input type',
                    rules : 'Accepts an array of functions that return either True or a String with an error message',
                    icon : "Prepends an icon inside the component's input",
                    disabled : 'Disable the input',
                    readonly : 'Puts input in readonly state',
                },
            }
        };
    }
    )
    .add('Append Classic', () => {
        return {
            components: {
                'c-inputgroups': CInputGroups
            },
            template: `<c-inputgroups compStyle="classicAppend" @change="log"/>`,
            methods:{log: action ('action')},
            propsDescription: {
                CInputGroups: {
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
    }
    )
    .add('Append Minimalist', () => {
        return {
            components: {
                'c-inputgroups': CInputGroups
            },
            template: `<c-inputgroups compStyle="minimalAppend" @change="log"/>`,
            methods:{log: action ('action')},
            propsDescription: {
                CInputGroups: {
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
    }
    )
    .add('Prepend Classic', () => {
        return {
            components: {
                'c-inputgroups': CInputGroups
            },
            template: `<c-inputgroups compStyle="classicPrepend" @change="log"/>`,
            methods:{log: action ('action')},
            propsDescription: {
                CInputGroups: {
                    selectData : 'Accepts an array - which contains values of items, value, color, solo, box, outline, label',
                },
            }
        };
    }
    )
    .add('Prepend Minimalist', () => {
        return {
            components: {
                'c-inputgroups': CInputGroups
            },
            template: `<c-inputgroups compStyle="minimalPrepend" @change="log"/>`,
            methods:{log: action ('action')},
            propsDescription: {
                CInputGroups: {
                    selectData : 'Accepts an array - which contains values of items, value, color, solo, box, outline, label',
                },
            }
        };
    }
)

// c-modal
storiesOf('UI COMPONENT  | Vuetify Custom/Modal', module)
    .addDecorator(appDecorator) 
    .addParameters({
        readme: {
            codeTheme: 'monokai-sublime',
            sidebar: CModalSetup,
        },
        info: {
            components: {
                'c-modal': CModal
            },
            docsInPanel: false,
            source: false,
            summary: CModalContent,
            wrapperComponent: VueInfoWrapper,
        },
    })  
    .add('Default', () => {
        return {
            components: {
                'c-modal': CModal
            },
            template: `<c-modal @secondaryClick="secondaryClick" @primaryClick="primaryClick"/>`,
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
storiesOf('UI COMPONENT  | Vuetify Custom/Radio-button', module)
    .addDecorator(appDecorator) 
    .addParameters({
        readme: {
            codeTheme: 'monokai-sublime',
            sidebar: CRadioButtonSetup,
        },
        info: {
            components: {
                'c-radio-button': CRadioButton
            },
            docsInPanel: false,
            source: false,
            summary: CRadioButtonContent,
            wrapperComponent: VueInfoWrapper,
        },
    })  
    .add('Default', () => {
        return {
            components: {
                'c-radio-button': CRadioButton
            },
            template: `<div>
                            <c-radio-button :radioOptions="{'Unselected option':'one','Selected option': 'two'}" selected="two"/>
                            <c-radio-button :radioOptions="{'Disabled Unselected':'one','Disabled Selected': 'two'}" selected="two" :disable="true"/>
                        </div>`,
            propsDescription: {
                CRadioButton: {
                    disable: 'Disable the input',
                    radioOptions: 'Sets input labels',
                    selected: 'Sets the value of the selection control component',
                },
            }
        };
    },
        {
            notes: CRadioButtonChangelog
        }
    )

// c-status-pill
storiesOf('UI COMPONENT | Vuetify Custom / Status-pill', module)
    .addDecorator(appDecorator) 
    .addParameters({
        readme: {
            codeTheme: 'monokai-sublime',
            sidebar: CStatusPillSetup,
        },
        info: {
            components: {
                'c-status-pill': CStatusPill
            },
            docsInPanel: false,
            source: false,
            summary: CStatusPillContent,
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
storiesOf('UI COMPONENT | Vuetify Custom / Tab', module)
    .addDecorator(appDecorator) 
    .addParameters({
        readme: {
            codeTheme: 'monokai-sublime',
            sidebar: CTabSetup,
        },
        info: {
            components: {
                'c-tab': CTab
            },
            docsInPanel: false,
            source: true,
            summary: CTabContent,
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
storiesOf('UI COMPONENT | Vuetify Custom/ Textarea', module)
    .addDecorator(appDecorator) 
    .addParameters({
        readme: {
            codeTheme: 'monokai-sublime',
            sidebar: CTextareaSetup,
        },
        info: {
            components: {
                'c-textarea': CTextarea
            },
            docsInPanel: false,
            source: false,
            summary: CTextareaContent,
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
storiesOf('UI COMPONENT | Vuetify Custom/Textfield', module)
    .addDecorator(appDecorator) 
    .addParameters({
        readme: {
            codeTheme: 'monokai-sublime',
            sidebar: CTextfieldSetup,
        },
        info: {
            components: {
                'c-textfield': CTextfield
            },
            docsInPanel: false,
            source: false,
            summary: CTextfieldContent,
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
storiesOf('UI COMPONENT | Vuetify Custom / Toggle', module)
    .addDecorator(appDecorator) 
    .addParameters({
        readme: {
            codeTheme: 'monokai-sublime',
            sidebar: CToggleSetup,
        },
        info: {
            components: {
                'c-toggle': CToggle
            },
            docsInPanel: false,
            source: false,
            summary: CToggleContent,
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

// c-tooltip 
storiesOf('UI COMPONENT | Vuetify Custom / Tooltip', module)
    .addDecorator(appDecorator) 
    .addParameters({
        readme: {
            codeTheme: 'monokai-sublime',
            sidebar: CTooltipSetup,
        },
        info: {
            components: {
                'c-tooltip': CTooltip
            },
            docsInPanel: false,
            source: false,
            summary: CTooltipContent,
            wrapperComponent: VueInfoWrapper
        },
    })  
    .add('Default', () => {
        return {
            components: {
                'c-tooltip': CTooltip
            },
            template: `<c-tooltip />`,
            propsDescription: {
                VAlert: {
                    bottom: 'Button state for disabled',
                },
            }
        };
    },
        {
            notes: CTooltipChangelog
        }
    )

/* eslint-enable react/react-in-jsx-scope */
