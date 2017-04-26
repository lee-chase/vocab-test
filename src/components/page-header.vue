<!--
  Page header.

  Usage:
    <page-header></page-header>

-->

<template>
  <div class="page-header">
    Your score is: <span class="score">{{score}}</span>
  </div>
</template>

<script>
  export default {
    name: 'page-header',
    props: ['score'],
    data () {
      return {
      }
    }
  }
</script>

<style lang="scss">

</style>
