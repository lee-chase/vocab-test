<template>
  <div id="home-page">
    <page-header :score="score" :correct="correct" :incorrect="incorrect"></page-header>
    <main class="home-page__content" role="main">
      <h1>vocab-test home page</h1>
      <vocab-test class="vocab-test" @correct="mark(true)" @incorrect="mark(false)"></vocab-test>
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
        'score': '0',
        'correct': '0',
        'incorrect': '0'
      };
    },
    methods: {
      mark(correct) {
        if (correct) {
          this.score++;
          this.correct++;
        } else {
          this.score--;
          this.incorrect++;
        }
      }
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

  .vocab-test {
    max-width: 100%;
    width: 600px;
    margin: 0 auto;
  }
</style>
