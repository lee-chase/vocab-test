<template>
  <button @click="clicked" :disabled="disabledAnswer" :class="[showResult ? 'clicked ' + answerIcon : '']">
    <slot></slot>
  </button>
</template>
<script>
  export default {
    data() {
      return {
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
        this.$emit('click', this.$event);
      }
    }
  }
</script>

<style lang="scss">
button {
  background-color: #fafafa;
  border: 1px solid #aaaaaa;
  font-size: 12px;
  padding: 0 30px;

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
