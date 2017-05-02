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
        <answer-button class="answer__button" @click="isCorrect(index, $event)" :answer-icon="setIcon(index)" :disable-answer="correctlyAnswered"
          :show-result="questionAsked.list[index].clicked">
          {{word.definition}}
        </answer-button>
      </li>
    </ul>
    <button @click="nextQuestion()" :disabled="!correctlyAnswered">Next word</button>
    <!-- <audio id="audio-correct">
      <source src="../assets/sounds/fireworks.mp3" type="audio/mpeg">
    </audio> -->
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
        audio: {}
      };
    },
    components: {
      'answer-button': answerButton
    },
    computed: {
    },
    mounted() {
      // this.audio.fireworks = $el.getElementById('audio-fireworks');
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
        if (index === this.questionAsked.item) {
          // if (this.audio.fireworks) {
          //   this.audio.fireworks.play();
          // }
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
  width: 100%;
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
  height: 40px;
  background-color: #f1f1f1;
  border: none;
}
</style>
