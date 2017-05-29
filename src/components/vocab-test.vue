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
    <audio class="audio-letsgo">
      <source :src="require('../assets/sounds/lets-go.mp3')" type="audio/mpeg">
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
        audio: {},
        foo: 0
      };
    },
    components: {
      'answer-button': answerButton
    },
    computed: {
    },
    mounted() {
      this.audio.letsgo = this.$el.querySelectorAll('.audio-letsgo')[0];
    },
    created() {
      this.nextQuestion();
    },
    methods: {
      nextQuestion() {
        let indexes = [];
        while (indexes.length < 4) {
          let newIndex = Math.floor(Math.random() * this.words.length);
          if (!indexes.includes(newIndex)) {
            indexes.push(newIndex);
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
        console.dir(event);

        if (index === this.questionAsked.item) {
          console.dir(this.audio);
          if (this.audio.letsgo) {
            this.audio.letsgo.play();
          }
          this.correctlyAnswered = true;
          this.$emit('correct');
        } else {
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
