<!--
  vocab-test.

  Usage:
    <vocab-test>

    </vocab-test>
-->

<template>
  <div>
    <p class="question">
      What does <em class="word">{{questionAsked.list[this.questionAsked.item].word}}</em> mean?
    </p>
    <ul class="answers">
      <li v-for="word, index in questionAsked.list" class="answer">
        <answer-button class="answer__button" @click="isCorrect(index, $event)" :bar="foo" :answer-icon="setIcon(index)" :disable-answer="correctlyAnswered"
          :show-result="questionAsked.list[index].clicked">
          {{word.definition}}
        </answer-button>
      </li>
    </ul>
    <button @click="nextQuestion()" :disabled="!correctlyAnswered" class="next-question">Next word</button>
    <audio class="audio-letsgo" ref='letsgo'>
      <source :src="require('../assets/sounds/lets-go.mp3')" type="audio/mpeg">
    </audio>
    <audio class="audio-uh-oh" ref='uhoh'>
      <source :src="require('../assets/sounds/uh-oh-short.mp3')" type="audio/mpeg">
    </audio>
    <audio class="audio-fireworks" ref='fireworks'>
      <source :src="require('../assets/sounds/fireworks.mp3')" type="audio/mpeg">
    </audio>
    <audio class="audio-applause" ref='applause'>
      <source :src="require('../assets/sounds/applause.mp3')" type="audio/mpeg">
    </audio>
    <audio class="audio-trumpe" ref='trump'>
      <source :src="require('../assets/sounds/fail-trump.mp3')" type="audio/mpeg">
    </audio>
  </div>
</template>

<script>
  import words from '../modules/words';
  import answerButton from '../components/answer-button.vue';

  export default {
    name: 'vocab-test',
    data () {
      return {
        words: words.words,
        questionAsked: [],
        correctlyAnswered: false,
        foo: 0,
        score: 0,
        lastFanfare: 0,
      };
    },
    components: {
      'answer-button': answerButton
    },
    computed: {
    },
    mounted() {
    },
    created() {
      this.nextQuestion();
    },
    methods: {
      nextQuestion() {
        let indexes = [];
        let synonyms = [];
        while (indexes.length < 4) {
          let newIndex = Math.floor(Math.random() * this.words.length);
          if (!indexes.includes(newIndex) && synonyms.every((item) => item !== this.words[newIndex].word)) {
            indexes.push(newIndex);
            if (this.words[newIndex].synonyms) {
              synonyms = synonyms.concat(this.words[newIndex].synonyms);
            }
          }
        }
        let list = [];
        let item = Math.floor(Math.random() * indexes.length);

        for (let i = 0; i < indexes.length; i++) {
          let def = this.words[indexes[i]].definition;
          if (typeof def !== 'string') {
            // array of options
            let iDef = Math.floor(Math.random() * def.length);
            def = def[iDef];
          }
          list.push( {
            word: this.words[indexes[i]].word,
            definition: def,
            correct: i === item,
            clicked: false
          })
        }
        this.questionAsked = {
          list,
          item
        };
        this.correctlyAnswered = false;
      },
      correctAnswer(index) {
        return this.questionAsked.list[index].correct;
      },
      setIcon(index) {
        return index === this.questionAsked.item ? 'happy' : 'sad';
      },
      isCorrect(index, event) {
        if (index === this.questionAsked.item) {
          this.score++;
          if (this.score % 50 === 0 && this.score > this.lastFanfare) {
            this.lastFanfare = this.score;
            this.$refs.fireworks.play();
          } else {
            this.$refs.letsgo.play();
          }
          this.correctlyAnswered = true;
          this.$emit('correct');
        } else {
          this.score--;
          this.$refs.uhoh.play();
          this.$emit('incorrect');
        }
        this.questionAsked.list[index].clicked = true;
      }
    }
  }

</script>

<style lang="scss">
.question {
  padding: 10px;
  display: inline-block;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, .7);
}

.word {
  font-style: normal;
  font-weight: bold;
}

.answers {
  padding: 0;
}

.answer {
  list-style: none;
  margin: 10px 0;
}

.answer__button {
  width: 100%;
  min-height: 40px;
  background-color: rgba(235, 227, 247, 1);
  border: none;

  &:disabled {
    background-color: rgba(250, 250, 250, .5);
  }
}

.next-question {
  border: none;
  height: 40px;
  padding: 0 30px;
  border-radius: 3px;
  float: right;
  background-color: rgba(55, 255, 55, 1);

  &:disabled {
    background-color: rgba(55, 255, 55, .1);
  }
}
</style>
