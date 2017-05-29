<template>
  <button @click="clicked" :disabled="disableAnswer" :class="[showResult ? 'clicked ' + answerIcon : '']">
    <slot></slot>
  </button>
</template>
<script>
  export default {
    data() {
      return {
        bar: {
          type: Number,
          default: 1
        }
      };
    },
    name: 'answer-button',
    props: {
      answerIcon: {
        type: String,
        default: 'happy'
      },
      disableAnswer: {
        type: Boolean,
        default: false
      },
      showResult: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      disabledAnswer() {
        return this.disableAnswer;
      }
    },
    methods: {
      clicked() {
        this.bar = 42;
        this.$emit('click', this.$event);
      }
    }
  }
</script>

<style lang="scss">
button {
  background-color: #fafafa;
  border: 1px solid #aaaaaa;
  font-size: 14px;
  padding: 0 30px;
  border-radius: 3px;

  background-color: rgba(255, 255, 255, .8);


  &.clicked {
    background-position: center right;
    background-repeat: no-repeat;
    background-size: contain;

    background-image: url(~../assets/images/ace.svg);

    &.sad {
      background-image: url(~../assets/images/oh.svg);
    }
  }
}
</style>
