<template lang="pug">

base-layout-static

    h1.border-bottom Value Driven Development
    p 
        strong
            | Since the beginning of this project, we have been concentrating on creating something that would bring the best return on what we are investing our time and resources in, a.k.a, on what will bring the most value to everyone involved, but to ensure that we were following our own rule, we had to answer some big questions:
    
    .content-area--block
        h4.border-bottom  How do we define value?

        p For us, something was valuable as long as it was helping us in solving a relevant problem we were facing within our teams and the company. It never was about relying on buzzwords off Medium or some abstract idea in our mind, it’s had to help us reach closer towards our goals of solving the workflow issues between our different teams and allow us to build better products faster while being easy to use and understand.

    .content-area--block
        h4.border-bottom  Return in Investment?

        p Will what we are building help us same more time that what we are investing and how significantly it did so is also one of the main thoughts we had on our mind. We could take shortcuts, we could take something off the internet, we could use a UI-Kit, but would this really help us same time on the short and long term?

    .content-area--block
        h4.border-bottom  Do we need it now?

        p To be able to produce something useful as soon as possible, we couldn’t afford to lose time and resources building features that we are not ready for or that we cannot accommodate. This is why we are starting from an MVP and improving it as we go.

    .content-area--block
        h4.border-bottom  Is it simple enough?

        p We wanted to build something that would be simple to use for everyone, whatever their goal on UDS was and this is why we often refused to build features or use complicated frameworks that would only add a layer of complexity on what we are building.
    
    .content-area--block
        h4.border-bottom Standards & Advocacy

        .content-area--block
            h5.border-bottom
                | UX standards

        .content-area--block
            h5.border-bottom
                | Front-end standards



</template>

<script>
import BaseLayoutStatic from '../layouts/base-layout-static.vue';

export default {
  name: 'doc-value-driven-development',
  components: {
    'base-layout-static': BaseLayoutStatic
  }
}
</script>

<style lang="scss">



</style>
