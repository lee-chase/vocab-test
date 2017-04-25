<!--
  vocab-test.

  Usage:
    <vocab-test>

    </vocab-test>
-->

<template>
  <div>
    <p class="question">
      What does "{{question}}" mean?
    </p>
    <ul class="answers">
      <li v-for="word in questionAsked.list" class="answer">
        <button class="answer__button">{{word.definition}}</button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'vocab-test',
    data () {
      return {
        words: [{
          word: 'financial',
          definition: 'Things to do with money'
        }, {
          word: 'commodity',
          definition: 'something that can be bought or sold'
        }, {
          word: 'invaluable',
          definition: 'priceless, worth a lot'
        }, {
          word: 'pertinent',
          definition: 'relevant to something'
        }, {
          word: 'hefty',
          definition: 'e.g. large, strong, heavy'
        }, {
          word: 'substantial',
          definition: 'of considerable/large size'
        }, {
          word: 'nominal',
          definition: 'of small or low value'
        }, {
          word: 'amble',
          definition: 'walk slowly'
        }, {
          word: 'burden',
          definition: 'a heavy load'
        }, {
          word: 'utter',
          definition: ['express in sound or words', 'absolute or tatal']
        }, {
          word: 'muffle',
          definition: 'deaden/quieten sound'
        }, {
          word: 'amplify',
          definition: 'increase size, strength or loudness'
        }, {
          word: 'tactful',
          definition: 'avoiding giving offence'
        }, {
          word: 'sincere',
          definition: 'truthfully'
        }, {
          word: 'ridicule',
          definition: 'to make fun of'
        }, {
          word: 'commend',
          definition: 'praise'
        }, {
          word: 'abbeting',
          definition: 'help or encourange to commit crime'
        }, {
          word: 'lucrative',
          definition: 'very profitable'
        }, {
          word: 'vigour',
          definition: 'to do energetically'
        }, {
          word: 'prosperous',
          definition: 'wealthy'
        }, {
          word: 'synthetic',
          definition: 'not natural'
        }, {
          word: 'passive',
          definition: 'inactive'
        }, {
          word: 'sedate',
          definition: ['slow orbject or bing', 'send to sleep']
        }, {
          word: 'liability',
          definition: 'makes more risky or hard'
        }, {
          word: 'maverick',
          definition: 'someone who behaves differently/rebels'
        }, {
          word: 'renegade',
          definition: 'someone who rebels'
        }, {
          word: 'craven',
          definition: 'lacking in courage, a cowardly person'
        }, {
          word: 'flustered',
          definition: 'lose your calm'
        }, {
          word: 'poised',
          definition: 'a state of balance/calmness'
        }, {
          word: 'appropriate',
          definition: ['the correct ation/thing', 'a-pro-pre-eight take something']
        }, {
          word: 'vulgar',
          definition: 'rude'
        }],
        questionAsked: []
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
        for (let i = 0; i < indexes.length; i++) {
          let def = this.words[indexes[i]].definition;
          if (typeof def !== 'string') {
            // array of options
            console.log(typeof def);
            let iDef = Math.floor(Math.random() * def.length);
            def = def[iDef];
          }
          console.log('hi2');
          list.push( {
            word: this.words[indexes[i]].word,
            definition: def
          })
        }
        this.questionAsked = {
          list,
          item: Math.floor(Math.random() * indexes.length)
        };
        return this.questionAsked.list[this.questionAsked.item].word;
      }
    },
    mounted() {
    },
    created() {
    },
    methods: {
    }
  }

</script>

<style lang="scss">

</style>
