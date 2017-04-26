<!--
  vocab-test.

  Usage:
    <vocab-test>

    </vocab-test>
-->

<template>
  <div>
    <p class="question">
      What does <em class="word">{{question}}</em> mean?
    </p>
    <ul class="answers">
      <li v-for="word, index in questionAsked.list" class="answer">
        <button class="answer__button" @click="isCorrect(index, $event)" :disabled="disabledAnswer(index)"
          :class="{'correct': correctAnswer(index)}">
          {{word.definition}}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
  import words from '../modules/words';

  export default {
    name: 'vocab-test',
    data () {
      return {
        words: words.words,
        questionAsked: [],
        correctlyAnswered: false,
        disableAnswer: []
      };
    },
    computed: {
      question() {
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
            correct: i === item
          })
          this.disableAnswer[i] = false;
        }
        this.questionAsked = {
          list,
          item
        };
        return this.questionAsked.list[this.questionAsked.item].word;
      }
    },
    mounted() {
    },
    created() {
    },
    methods: {
      correctAnswer(index) {
        return this.questionAsked.list[index].correct;
      },
      disabledAnswer(index) {
        let disabled;
        try {
          disabled = this.disableAnswer[index];
        } catch (e) {
          disabled = false;
        }
        return disabled;
      },
      isCorrect(index, event) {
        this.disableAnswer[index] = true;
        if (index === this.questionAsked.item) {
          this.$emit('correct');
        } else {
          this.$emit('incorrect');
        }
        this.$forceUpdate();
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

  &:disabled {
    background-image: url(~../assets/images/oh.svg);
    background-position: center right;
    background-repeat: no-repeat;
    background-size: contain;
    border: none;

    &.correct {
      background-image: url(~../assets/images/ace.svg);
    }
  }
}
</style>
