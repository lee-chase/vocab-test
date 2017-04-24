<template>
  <div id="home-page">
    <page-header></page-header>
    <main class="home-page__content" role="main">
      <h1>vocab-test home page</h1>
      <vocab-test></vocab-test>
    </main>
  </div>
</template>

<script>
  import PageHeader from '../components/page-header.vue';
  import vocabTest from '../components/vocab-test.vue';

  export default {
    name: 'home-page',
    data () {
      return {
      };
    },
    methods: {
    },
    components: {
      'page-header': PageHeader,
      'vocab-test': vocabTest
    }
  }
</script>

<style lang="scss">
  .home-page__content {
    padding: 0 50px;
  }
</style>
