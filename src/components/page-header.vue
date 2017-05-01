<!--
  Page header.

  Usage:
    <page-header></page-header>

-->

<template>
  <div class="page-header">
    Your score: {{score}}, correct: {{correct}}, incorrect: {{incorrect}}

  </div>
</template>

<script>
  export default {
    name: 'page-header',
    props: ['score', 'correct', 'incorrect'],
    data () {
      return {
      }
    }
  }
</script>

<style lang="scss">

</style>
