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
        'incorrect': '0',
        lastAnswerDate: -1,
      };
    },
    methods: {
      mark(correct) {
        let dateObj = new Date();
        let now = dateObj.getTime();

        if (this.lastAnswerDate < 0 || (now - this.lastAnswerDate > 7200000)) {
          // if more than two hour reset the scores
          this.score = 0;
          this.correct = 0;
          this.incorrect = 0;
          this.lastAnswerDate = now;
        }
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
  };
</script>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
    font-size: 18px;
  }

  #app {
    padding: 0;
  }

  #home-page {
    height: 100vh;
    width: 100vw;

    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 0 0 100px;
    box-sizing: border-box;

    background: url(~../assets/images/purple-sky.jpg);
    background-size: cover;
    background-position: center;
  }

  h1 {
    visibility: hidden;
    position: absolute;
    left: -9999px
  }

  .home-page__content {
    padding: 0 20px;
  }

  .vocab-test {
    max-width: 100%;
    width: 600px;
    margin: 0 auto;
  }
</style>
