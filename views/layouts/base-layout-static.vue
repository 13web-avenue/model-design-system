<template lang="pug">

div(class="layout-default layout-default--static")
    header(class="heading")
        h1.header-title
    section(class="content-area")
        slot
    footer(class="footer")
        h3.footnote
        .footer--baseline-tag
            p
                span(class="uppercased letter-spacing-1") crafted with 
                    svg(class="icon-svg-heart", viewBox="0 0 32 29.6")
                        path(d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z")
                    | UNIFY DESIGN SYSTEM
</template>

<script>
 
export default {
  name: 'BaseStaticLayout'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

// Layouts
.layout-dynamic,
.layout-default {

    background: #fff;

    margin: 0 auto;
    max-width: 100%;
    padding: 4rem;

    // box-shadow: 
    box-shadow: 
      0px 1px 0px -2px rgba(0, 0, 0, 0.2), 
      0px 0px 0px 0px rgba(0, 0, 0, 0.03), 
      0px 0px 0px 0px rgba(0, 0, 0, 0.05);

        &--table-full-screen,
        &--static {
                        
          max-width: 80rem;

        }
}

// content-area
.content-area {

  ul,
  P {

      color: #414141;

      font-family: 'Open Sans', Helvetica, "Segoe UI", Arial, sans-serif;
      font-size: 1.2rem;

      line-height: 1.5;
      margin-bottom: 1.5rem;

      &:last-child {

          margin: 0;

      }
  }

  &--block {

    margin-bottom: 1.5rem;
    
    .content-area--block {
      margin-left: 2rem;
    }

  }

}

//footer
.footer {

  &--baseline-tag {
    border-top: #f5f5f5 1px solid;

    font-family: 'Open Sans', Helvetica, "Segoe UI", Arial, sans-serif;
    font-weight: 400;
    font-size: .8rem;

    padding-top: .5rem;

    position: fixed;
    right: 1%;
    bottom: 0;
  }

}

/** 
*  typography definitions 
*  global heading sizing 
*/
h1 {
  font-size: 3.8em;
  font-weight: bold
}

h2 {
  font-size: 3.75rem;
  font-weight: bold
}

h3 {
  font-size: 3rem;
  font-weight: bold
}

h4 {
  font-size: 2.125rem;
  font-weight: bold
}

h5 {
  font-size: 1.5rem;
  font-weight: bold
}

h6 {
  font-size: 1.25rem;
  font-weight: 600
}

h1, h2, h3, h4, h5, h6 {

    font-family: 'Montserrat', sans-serif;

    margin-bottom: 1.2rem
}

.border-bottom {
    border-bottom: 1px solid #ebebeb;
}

.semi-bold {
  font-weight: 600;
}

button,
.body,
.labels-1,
.labels-2,
.subtitle-1,
.subtitle-2,
.subtitle-2 {
  font-family: 'Open Sans', sans-serif;
}

.uppercased {
    text-transform: uppercase
}
.letter-spacing-1 {
    letter-spacing: 1px
}

// helpers
.icon-svg-heart {
    display: inline-block;
    fill: #b505a8;
    position: relative;
    width: 14px;
    animation: pulse 1s ease infinite;
    margin: 0 .5rem;
}

</style>
