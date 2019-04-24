import { create } from '@storybook/theming';

export default create({
    base: 'light',

    // colorPrimary: '#FF4785',
    // colorSecondary: 'deepskyblue',

    // UI
    // appBg: '#2f2f2f',
    appContentBg: 'whitesmoke',
    // appBorderColor: 'grey',
    // appBorderRadius: 4,

    // Typography
    // fontBase: '"Open Sans", sans-serif',
    // fontCode: '"Operator Mono", "Fira Code Retina", "Fira Code", "FiraCode - Retina", "Andale Mono", "Lucida Console", "Consolas", "Monaco", "monospace"',

    // Text colors
    // textColor: '#000',
    // textInverseColor: '#FFF',

    // Toolbar default and active colors
    barTextColor: '#999999',
    barSelectedColor: "#1EA7FD",
    // barBg: 'hotpink',

    // Form colors
    inputBg: 'whitesmoke',
    inputBorder: 'silver',
    inputTextColor: 'black',
    inputBorderRadius: 4,

    // branding issues can be followed here
    // and the proper solution implemented once the PR is merged.
    // Github link: https://github.com/storybooks/storybook/issues/5866
    brandTitle: 'UNIFY DESIGN SYSTEM',
    brandUrl: 'https://arp.amaris.com/unify-design-system',
    brandImage: null
});