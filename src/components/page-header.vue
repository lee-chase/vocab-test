<!--
  Page header.

  Usage:
    <page-header></page-header>

-->

<template>
  <div class="page-header">
    <div class="score-card">
      Score: {{score}}
    </div>
    <div class="score-card">
      Correct: {{correct}}
    </div>
    <div class="score-card">
      Incorrect: {{incorrect}}
    </div>
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
  .page-header {
    display: flex;
    justify-content: center;
  }
  .score-card {
    padding: 6px;
    margin: 4px;
    border-radius: 3px;
    background-color: rgba(255, 255, 255, .7);
  }
</style>
