<template lang="pug">

  table.layout-uds-usg
    colgroup
      col.col-header
      col.col-header
    tbody
      tr
        th Scale
        th Typeface
        th Font
        th Size
        th Case
      tr
        td.heading
          h1 H1
        td Monserrat
        td Bold
        td 96
        td Sentence
      tr
        td.heading 
          h2 H2
        td Monserrat
        td Bold
        td 96
        td Sentence
      tr
        td.heading 
          h3 H3
        td Monserrat
        td Bold
        td 48
        td Sentence
      tr
        td 
          h4.heading H4
        td Monserrat
        td Bold
        td 34
        td Sentence
      tr
        td 
          h5.heading H5
        td Monserrat
        td Bold
        td 24
        td Sentence
      tr
        td 
          h6.heading.semi-bold H6
        td.semi-bold Monserrat
        td.semi-bold SemiBold
        td.semi-bold 20
        td.semi-bold Sentence
      tr
        td.subtitle-1 Subtitle 1
        td.subtitle-1 Open Sans
        td.subtitle-1 Bold
        td.subtitle-1 20
        td.subtitle-1 Sentence
      tr
        td.subtitle-2 Subtitle 2
        td.subtitle-2 Open Sans
        td.subtitle-2 Bold
        td.subtitle-2 16
        td.subtitle-2 Sentence
      tr
        td.subtitle-3 Subtitle 3
        td.subtitle-3 Open Sans
        td.subtitle-3 Bold
        td.subtitle-3 14
        td.subtitle-3 Sentence
      tr
        td.text-1 Text 1
        td Open Sans
        td Regular
        td 14
        td Sentence
      tr
        td.text-2 Text 2
        td Open Sans
        td Regular
        td 12
        td Sentence
      tr
        td 
          button(type='button') Button
        td Open Sans
        td Bold
        td 14
        td Sentence
      tr
        td.body Body
        td.body Open Sans
        td.body SemiBold
        td.body 14
        td.body Sentence
      tr
        td.labels-1 Labels 1
        td.labels-1 Open Sans
        td.labels-1 Bold
        td.labels-1 14
        td.labels-1 Sentence
      tr
        td.labels-2 Labels 2
        td.labels-2 Open Sans
        td.labels-2 ExtraBold
        td.labels-2 12
        td.labels-2 Sentence

</template>

<script>

export default {
  name: 'typography'
}

</script>


<style lang="scss" scoped>
*{
  font-family: 'Montserrat', sans-serif;
}
.layout-uds-usg {
  border-collapse: collapse;

  text-align: left;
  margin-top: 2rem;
  width: 100%;

  th{
    background: #ccc;

    padding: 1rem 5rem 1rem 1rem;
  }

  td{
    padding: 1rem 3rem 1rem 1rem;
    border-bottom: 1px dashed #ccc;
    border-right: 1px dashed #ccc;

    &:last-child {
      border-right: 0
    }
  }

}
/* global heading sizing */
h1 {
  font-size: 6rem;
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

</style>