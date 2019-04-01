/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

/**
 * Import component variations
 * Import .md files for:
 * 1.Notes => changelog.md
 * 2.ReadMe => setup.md
 * 3.PropsTables => component.vue file
 * 4.SlotTables => component.vue file
 */


import VToggle from '../core/ui-kit-default-components/v-toggle/packages/dist/v-toggle.vue'
import VToggleChangelog from '../core/ui-kit-default-components/v-toggle/v-toggle-changelog.md'
import VToggleSetup from '../core/ui-kit-default-components/v-toggle/v-toggle-setup.md'

import VTreeview from '../core/ui-kit-default-components/v-treeview/packages/dist/v-treeview.vue'
import VTreeviewChangelog from '../core/ui-kit-default-components/v-treeview/v-treeview-changelog.md'
import VTreeviewSetup from '../core/ui-kit-default-components/v-treeview/v-treeview-setup.md'

import VTimeline from '../core/ui-kit-default-components/v-timeline/packages/dist/v-timeline.vue'
import VTimelineChangelog from '../core/ui-kit-default-components/v-timeline/v-timeline-changelog.md'
import VTimelineSetup from '../core/ui-kit-default-components/v-timeline/v-timeline-setup.md'

import VTextfield from '../core/ui-kit-default-components/v-textfield/packages/dist/v-textfield.vue'
import VTextfieldChangelog from '../core/ui-kit-default-components/v-textfield/v-textfield-changelog.md'
import VTextfieldSetup from '../core/ui-kit-default-components/v-textfield/v-textfield-setup.md'

import VTextarea from '../core/ui-kit-default-components/v-textarea/packages/dist/v-textarea.vue'
import VTextareaChangelog from '../core/ui-kit-default-components/v-textarea/v-textarea-changelog.md'
import VTextareaSetup from '../core/ui-kit-default-components/v-textarea/v-textarea-setup.md'

import VSnackbar from '../core/ui-kit-default-components/v-snackbar/packages/dist/v-snackbar.vue'
import VSnackbarChangelog from '../core/ui-kit-default-components/v-snackbar/v-snackbar-changelog.md'
import VSnackbarSetup from '../core/ui-kit-default-components/v-snackbar/v-snackbar-setup.md'

import VSearch from '../core/ui-kit-default-components/v-search/packages/dist/v-search.vue'
import VSearchChangelog from '../core/ui-kit-default-components/v-search/v-search-changelog.md'
import VSearchSetup from '../core/ui-kit-default-components/v-search/v-search-setup.md'

import VRatings from '../core/ui-kit-default-components/v-ratings/packages/dist/v-ratings.vue'
import VRatingsChangelog from '../core/ui-kit-default-components/v-ratings/v-ratings-changelog.md'
import VRatingsSetup from '../core/ui-kit-default-components/v-ratings/v-ratings-setup.md'

import VNavigationDrawer from '../core/ui-kit-default-components/v-navigation-drawer/packages/dist/v-navigation-drawer.vue'
import VNavigationDrawerChangelog from '../core/ui-kit-default-components/v-navigation-drawer/v-navigation-drawer-changelog.md'
import VNavigationDrawerSetup from '../core/ui-kit-default-components/v-navigation-drawer/v-navigation-drawer-setup.md'

import VExpansionPanel from '../core/ui-kit-default-components/v-expansion-panel/packages/dist/v-expansion-panel.vue'
import VExpansionPanelChangelog from '../core/ui-kit-default-components/v-expansion-panel/v-expansion-panel-changelog.md'
import VExpansionPanelSetup from '../core/ui-kit-default-components/v-expansion-panel/v-expansion-panel-setup.md'

import VDivider from '../core/ui-kit-default-components/v-divider/packages/dist/v-divider.vue'
import VDividerChangelog from '../core/ui-kit-default-components/v-divider/v-divider-changelog.md'
import VDividerSetup from '../core/ui-kit-default-components/v-divider/v-divider-setup.md'

import VDatatable from '../core/ui-kit-default-components/v-data-table/packages/dist/v-datatable.vue'
import VDatatableChangelog from '../core/ui-kit-default-components/v-data-table/v-datatable-changelog.md'
import VDatatableSetup from '../core/ui-kit-default-components/v-data-table/v-datatable-setup.md'

import VCombobox from '../core/ui-kit-default-components/v-combobox/packages/dist/v-combobox.vue'
import VComboboxChangelog from '../core/ui-kit-default-components/v-combobox/v-combobox-changelog.md'
import VComboboxSetup from '../core/ui-kit-default-components/v-combobox/v-combobox-setup.md'

import VCard from '../core/ui-kit-default-components/v-card/packages/dist/v-card.vue'
import VCardChangelog from '../core/ui-kit-default-components/v-card/v-card-changelog.md'
import VCardSetup from '../core/ui-kit-default-components/v-card/v-card-setup.md'

import VBreadcrumbs from '../core/ui-kit-default-components/v-breadcrumbs/packages/dist/v-breadcrumbs.vue'
import VBreadcrumbsChangelog from '../core/ui-kit-default-components/v-breadcrumbs/v-breadcrumbs-changelog.md'
import VBreadcrumbsSetup from '../core/ui-kit-default-components/v-breadcrumbs/v-breadcrumbs-setup.md'

import VBadge from '../core/ui-kit-default-components/v-badge/packages/dist/v-badge.vue'
import VBadgeChangelog from '../core/ui-kit-default-components/v-badge/v-badge-changelog.md'
import VBadgeSetup from '../core/ui-kit-default-components/v-badge/v-badge-setup.md'

import VAlert from '../core/ui-kit-default-components/v-alert/packages/dist/v-alert.vue'
import VAlertChangelog from '../core/ui-kit-default-components/v-alert/v-alert-changelog.md'
import VAlertSetup from '../core/ui-kit-default-components/v-alert/v-alert-setup.md'

// Add custom wrappers here 
// import VueInfoWrapper from '../plugins/vue-info-wrapper/vue-info-wrapper.vue'


import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css';

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
            <div style="background-color: none; width: 100%; height: 100%;">
            <v-content>
                <story/>
            </v-content>
            </div>
        </v-app>
        `,
    };
};

 
storiesOf('Library | UI KIT vuetify ready / v-alert', module)
    .addDecorator(appDecorator) 
    .addParameters({
        readme: {
            codeTheme: 'monokai-sublime',
            sidebar: VAlertSetup,
            theme: {
                textColor: '#bb255a'
            },
        },
        info: {
            components: {
                'v-alert': VAlert
            },
            docsInPanel: false,
            source: false,
            // wrapperComponent: VueInfoWrapper,
        },
        
    })  
    .add('Default', () => {
        return {
                components: {
                    'v-alert': VAlert
                },
                template: `<v-alert type="success">
                        This is a success alert.
                        </v-alert>`,
                propsDescription: {
                    VAlert: {
                        value: 'Sets Boolean type',
                        type: 'Sets input type',
                    },
                }
            };
        },
        {
            notes: VAlertChangelog
        }
    )
    .addParameters({
        readme: {
            codeTheme: 'monokai-sublime',
            sidebar: VAlertSetup,
            theme: {
                textColor: '#bb255a'
            },
            info: {
                components: {
                    'v-alert': VAlert
                },
                docsInPanel: false,
                source: false,
            },
        }
    })     
    .add('Basic', () => {
        return {
            components: {
                'v-alert': VAlert
            },
            template: `
                <div>
                    <v-alert type="success">This is a success alert.</v-alert>
                    <v-alert type="info">This is a info alert.</v-alert>
                    <v-alert type="warning">This is a warning alert.</v-alert>
                    <v-alert type="error">This is a error alert.</v-alert>
                </div>           
            `,
            propsDescription: {
                VAlert: {
                    value: 'Sets Boolean type',
                    type: 'Sets input type',
                }
            }
        };
    },
        {
            notes: VAlertChangelog
        }
    )

storiesOf('Library | UI KIT (vuetify ready)/ v-badge', module)
    .addDecorator(appDecorator)
    .addParameters({
        readme: {
            codeTheme: 'monokai-sublime',
            sidebar: VBadgeSetup,
            theme: {
                textColor: '#bb255a'
            },
        },
        info: {
            components: {
                'v-badge': VBadge
            },
            docsInPanel: false,
            source: false,
        },
    })
    .add('Default', () => {
        return {
            components: {
                'v-badge': VBadge
            },
            template: `<v-badge />`,
            propsDescription: {
                VBadge: {
                    color: 'Sets String type',
                    bottom: 'Sets Boolean type',
                    left: 'Sets Boolean type',
                    overlap: 'Sets Boolean type'

                }
            }
        };
    },
        {
            notes: VBadgeChangelog
        }
    )    

// v-breadcrumbs
storiesOf('Library | UI KIT (vuetify ready)/ v-breadcrumbs', module)
    .addDecorator(appDecorator)
    .addParameters({
        readme: {
            codeTheme: 'monokai-sublime',
            sidebar: VBreadcrumbsSetup,
            theme: {
                textColor: '#bb255a'
            },
        },
        info: {
            components: {
                'v-breadcrumbs': VBreadcrumbs
            },
            docsInPanel: false,
            source: false,
        },
    })
    .add('Default', () => {
        return {
            components: {
                'v-breadcrumbs': VBreadcrumbs
            },
            template: `<v-breadcrumbs />`,
            propsDescription: {
                VBreadcrumbs: {
                    color: 'Sets String type',
                    bottom: 'Sets Boolean type',
                    left: 'Sets Boolean type',
                    overlap: 'Sets Boolean type'
                }
            }
        };
    },
        {
            notes: VBreadcrumbsChangelog
        }
    )

storiesOf('Library | UI KIT (vuetify ready)/ v-card', module)
    .addDecorator(appDecorator)
    .addParameters({
        readme: {
            codeTheme: 'monokai-sublime',
            sidebar: VCardSetup,
            theme: {
                textColor: '#bb255a'
            },
        },
        info: {
            components: {
                'v-card': VCard
            },
            docsInPanel: false,
            source: false,
        },
    })
    .add('Default', () => {
        return {
            components: {
                'v-card': VCard
            },
            template: `<v-card />`,
            propsDescription: {
                VCard:{
                    color: 'Sets String type',
                    bottom: 'Sets Boolean type',
                    left: 'Sets Boolean type',
                    overlap: 'Sets Boolean type'        
                }
            }
        };
    },
        {
            notes: VCardChangelog
        }
    ) 
    
// v-combobox
storiesOf('Library | UI KIT (vuetify ready)/ v-combobox', module)
    .addDecorator(appDecorator)
    .addParameters({
        readme: {
            codeTheme: 'monokai-sublime',
            sidebar: VComboboxSetup,
            theme: {
                textColor: '#bb255a'
            },
        },
        info: {
            components: {
                'v-combobox': VCombobox
            },
            docsInPanel: false,
            source: false,
        },
    })
    .add('Default', () => {
        return {
            components: {
                'v-combobox': VCombobox
            },
            template: `<v-combobox selected=""/>`,
            propsDescription: {
                VCombobox: {
                    disable : 'Sets Boolean type',
                    type : 'Sets input type',
                    checkbox_status : 'Sets Boolean type',
                    label : 'Sets String type',
                }
            }
        };
    },
        {
            notes: VComboboxChangelog
        }
    )
    .add('Disabled', () => {
        return {
            components: {
                'v-combobox': VCombobox
            },
            template: `<v-combobox disabled="true"/>`,
            propsDescription: {
                VCombobox: {
                    disable : 'Sets Boolean type',
                    type : 'Sets input type',
                    checkbox_status : 'Sets Boolean type',
                    label : 'Sets String type',
                }
            }
        };
    },
        {
            notes: VComboboxChangelog
        }
    )

    
// v-datable
storiesOf('Library | UI KIT (vuetify ready)/ v-datatable', module)
    .addDecorator(appDecorator)
    .addParameters({
        readme: {
            codeTheme: 'monokai-sublime',
            sidebar: VDatatableSetup,
            theme: {
                textColor: '#bb255a'
            },
        },
        info: {
            components: {
                'v-table': VDatatable
            },
            docsInPanel: false,
            source: false,
        },
    })
    .add('Default', () => {
        return {
            components: {
                'v-table': VDatatable
            },
            template: `<v-table selected=""/>`,
            propsDescription: {
                VDatatable: {
                    disable : 'Sets Boolean type',
                    type : 'Sets input type',
                    checkbox_status : 'Sets Boolean type',
                    label : 'Sets String type',
                }
            }
        };
    },
        {
            notes: VDatatableChangelog
        }
    )

    
// v-divider
storiesOf('Library | UI KIT (vuetify ready)/ v-divider', module)
    .addDecorator(appDecorator)
    .addParameters({
        readme: {
            codeTheme: 'monokai-sublime',
            sidebar: VDividerSetup,
            theme: {
                textColor: '#bb255a'
            },
        },
        info: {
            components: {
                'v-divider': VDivider
            },
            // docsInPanel: false,
            // source: false,
        },
    })
    .add('Default', () => {
        return {
            components: {
                'v-divider': VDivider
            },
            template: `<v-divider/>`,
            // propsDescription: {
            //     VDivider: {
            //     }
            // }
        };
    },
        {
            notes: VDividerChangelog
        }
    )

    
// v-expansion-panel
storiesOf('Library | UI KIT (vuetify ready)/ v-expansion-panel', module)
    .addDecorator(appDecorator)
    .addParameters({
        readme: {
            codeTheme: 'monokai-sublime',
            sidebar: VExpansionPanelSetup,
            theme: {
                textColor: '#bb255a'
            },
        },
        info: {
            components: {
                'v-expansion-panel': VExpansionPanel
            },
            docsInPanel: false,
            source: false,
        },
    })
    .add('Default', () => {
        return {
            components: {
                'v-expansion-panel': VExpansionPanel
            },
            template: `<v-expansion-panel />`,
            propsDescription : {
                VExpansionPanel: {
                    disable : 'Sets Boolean type',
                }
            }
        };
    },
        {
            notes: VExpansionPanelChangelog
        }
    )
    .add('Disabled', () => {
        return {
            components: {
                'v-expansion-panel': VExpansionPanel
            },
            template: `<v-expansion-panel disable="true"/>`,
            propsDescription : {
                VExpansionPanel: {
                    disable : 'Sets Boolean type',
                }
            }
        };
    },
        {
            notes: VExpansionPanelChangelog
        }
    )

    
// v-navigation-drawer
storiesOf('Library | UI KIT (vuetify ready)/ v-navigation-drawer', module)
    .addDecorator(appDecorator)
    .addParameters({
        readme: {
            codeTheme: 'monokai-sublime',
            sidebar: VNavigationDrawerSetup,
            theme: {
                textColor: '#bb255a'
            },
        }
    })
    .add('Default', () => {
        return {
            components: {
                'v-navigation-drawer': VNavigationDrawer
            },
            template: `<v-navigation-drawer />`
        };
    },
        {
            notes: VNavigationDrawerChangelog
        }
    ) 

    
// v-ratings
storiesOf('Library | UI KIT (vuetify ready)/ v-ratings', module)
    .addDecorator(appDecorator)
    .addParameters({
        readme: {
            codeTheme: 'monokai-sublime',
            sidebar: VRatingsSetup,
            theme: {
                textColor: '#bb255a'
            },
        },
        info: {
            components: {
                'v-ratings': VRatings
            },
            docsInPanel: false,
            source: false,
        }
    })
    .add('Default', () => {
        return {
            components: {
                'v-ratings': VRatings
            },
            template: `<v-ratings />`,
            propsDescription : {
                VRatings: {
                    value: 'Sets Number type',
                    color: 'Sets String type',
                    background_color : 'Sets String type',
                    large: 'Sets Boolean type',
                    small: 'Sets Boolean type',
                    medium : 'Sets Boolean type',
                    x_large: 'Sets Boolean type'
                }
            }            
        };
    },
        {
            notes: VRatingsChangelog
        }
    )

    
// v-search
storiesOf('Library | UI KIT (vuetify ready)/ v-search', module)
    .addDecorator(appDecorator)
    .addParameters({
        readme: {
            codeTheme: 'monokai-sublime',
            sidebar: VSearchSetup,
            theme: {
                textColor: '#bb255a'
            },
        },
        info: {
            components: {
                'v-search': VSearch
            },
            docsInPanel: false,
            source: false,
        }
    })
    .add('Default', () => {
        return {
            components: {
                'v-search': VSearch
            },
            template: `<v-search />`,
            propsDescription : {
                VSearch: {
                    disable: 'Sets Boolean type',
                    label: 'Sets String type',
                    clear : 'Sets Boolean type',
                }
            }            
        };
    },
        {
            notes: VSearchChangelog
        }
    )  
    .add('Disabled', () => {
        return {
            components: {
                'v-search': VSearch
            },
            template: `<v-search disable="true" />`,
            propsDescription : {
                VSearch: {
                    disable: 'Sets Boolean type',
                    label: 'Sets String type',
                    clear : 'Sets Boolean type',
                }
            }            
        };
    },
        {
            notes: VSearchChangelog
        }
    )  


// v-snackbar
storiesOf('Library | UI KIT (vuetify ready)/ v-snackbar', module)
    .addDecorator(appDecorator)
    .addParameters({
        readme: {
            codeTheme: 'monokai-sublime',
            sidebar: VSnackbarSetup,
            theme: {
                textColor: '#bb255a'
            },
        },
        info: {
            components: {
                'v-snackbar': VSnackbar
            },
            docsInPanel: false,
            source: false,
        }
    })
    .add('Default', () => {
        return {
            components: {
                'v-snackbar': VSnackbar
            },
            template: `<v-snackbar />`,
            propsDescription: {
                VSnackbar: {
                    // disable: 'Sets Boolean type',
                    // label: 'Sets String type',
                    // clear: 'Sets Boolean type',
                }
            }
        };
    },
        {
            notes: VSnackbarChangelog
        }
    )


// v-textarea
storiesOf('Library | UI KIT (vuetify ready)/ v-textarea', module)
    .addDecorator(appDecorator)
    .addParameters({
        readme: {
            codeTheme: 'monokai-sublime',
            sidebar: VTextareaSetup,
            theme: {
                textColor: '#bb255a'
            },
        },
        info: {
            components: {
                'v-textarea': VTextarea
            },
            docsInPanel: false,
            source: false,
        }
    })
    .add('Default', () => {
        return {
            components: {
                'v-textarea': VTextarea
            },
            template: `<v-textarea />`,
            propsDescription: {
                VTextarea: {
                    label: 'Sets String type',
                    outline: 'Sets Boolean type',
                    color: 'Sets String type',
                    disabled: 'Sets Boolean type',
                    readonly: 'Sets Boolean type',
                    value: 'Sets String type',
                    className: 'Sets String type',
                    hint: 'Sets String type',
                    rules: 'Sets Array type',
                }
            }
        };
    },
        {
            notes: VTextareaChangelog
        }
    )
    .add('Disabled', () => {
        return {
            components: {
                'v-textarea': VTextarea
            },
            template: `<v-textarea :disabled=true />`,
            propsDescription: {
                VTextarea: {
                    label: 'Sets String type',
                    outline: 'Sets Boolean type',
                    color: 'Sets String type',
                    disabled: 'Sets Boolean type',
                    readonly: 'Sets Boolean type',
                    value: 'Sets String type',
                    className: 'Sets String type',
                    hint: 'Sets String type',
                    rules: 'Sets Array type',
                }
            }
        };
    },
        {
            notes: VTextareaChangelog
        }
    )  


// v-textfield
storiesOf('Library | UI KIT (vuetify ready)/ v-textfield', module)
    .addDecorator(appDecorator)
    .addParameters({
        readme: {
            codeTheme: 'monokai-sublime',
            sidebar: VTextfieldSetup,
            theme: {
                textColor: '#bb255a'
            },
        },
        info: {
            components: {
                'v-textfield': VTextfield
            },
            docsInPanel: false,
            source: false,
        }
    })
    .add('Default', () => {
        return {
            components: {
                'v-textfield': VTextfield
            },
            template: `<v-textfield />`,
            propsDescription: {
                VTextfield: {
                    label: 'Sets String type',
                    outline: 'Sets Boolean type',
                    color: 'Sets String type',
                    disabled: 'Sets Boolean type',
                    readonly: 'Sets Boolean type',
                    value: 'Sets String type',
                    className: 'Sets String type',
                    hint: 'Sets String type',
                    rules: 'Sets Array type',
                }
            }
        };
    },
        {
            notes: VTextfieldChangelog
        }
    )
    .add('Disabled', () => {
        return {
            components: {
                'v-textfield': VTextfield
            },
            template: `<v-textfield :disabled=true />`,
            propsDescription: {
                VTextfield: {
                    label: 'Sets String type',
                    outline: 'Sets Boolean type',
                    color: 'Sets String type',
                    disabled: 'Sets Boolean type',
                    readonly: 'Sets Boolean type',
                    value: 'Sets String type',
                    className: 'Sets String type',
                    hint: 'Sets String type',
                    rules: 'Sets Array type',
                }
            }
        };
    },
        {
            notes: VTextfieldChangelog
        }
    )


// v-timeline
storiesOf('Library | UI KIT (vuetify ready)/ v-timeline', module)
    .addDecorator(appDecorator)
    .addParameters({
        readme: {
            codeTheme: 'monokai-sublime',
            sidebar: VTimelineSetup,
            theme: {
                textColor: '#bb255a'
            },
        },
        info: {
            components: {
                'v-timeline': VTimeline
            },
            // docsInPanel: false,
            // source: false,
        },
    })
    .add('Default', () => {
        return {
            components: {
                'v-timeline': VTimeline
            },
            template: `<v-timeline/>`,
        };
    },
        {
            notes: VTimelineChangelog
        }
    )


// v-toggle
storiesOf('Library | UI KIT (vuetify ready)/ v-toggle', module)
    .addDecorator(appDecorator)
    .addParameters({
        readme: {
            codeTheme: 'monokai-sublime',
            sidebar: VToggleSetup,
            theme: {
                textColor: '#bb255a'
            },
        },
        info: {
            components: {
                'v-toggle': VToggle
            },
            // docsInPanel: false,
            // source: false,
        },
        
    })
    .add('Default', () => {
        return {
            components: {
                'v-toggle': VToggle
            },
            template: `<v-toggle />`,
        };
    },
        {
            notes: VToggleChangelog
        }
    )
    .add('Disabled', () => {
        return {
            components: {
                'v-toggle': VToggle
            },
            template: `<v-toggle :disable=true />`,
        };
    },
        {
            notes: VToggleChangelog
        }
    )    


// v-treeview
storiesOf('Library | UI KIT (vuetify ready)/ v-treeview', module)
    .addDecorator(appDecorator)
    .addParameters({
        readme: {
            codeTheme: 'monokai-sublime',
            sidebar: VTreeviewSetup,
            theme: {
                textColor: '#bb255a'
            },
        },
        info: {
            components: {
                'v-treeview': VTreeview
            },
            // docsInPanel: false,
            // source: false,
        },
    })
    .add('Default', () => {
        return {
            components: {
                'v-treeview': VTreeview
            },
            template: `<v-treeview :disable=true />`,
        };
    },
        {
            notes: VTreeviewChangelog
        }
    ) 
        
/* eslint-enable react/react-in-jsx-scope */
