<template>
  <button class="smilie-button" :class="{smilie-button--show-face: show-face, whatFace}">
    <slot></slot>
  </button>
</template>
<script>
  export default {
    name: 'smilie-button',
    props: ['show-face'],
    data () {
      return {
      }
    },
    computed: {
      whatFace() {
        if (this.showFace) {
          if (this.showFace === 'sad')) {
            return 'smilie-button--sad-face';
          } else {
            return 'smilie-button--happy-face';
          }
        }
      }
    }
  }
</script>

<style lang="scss">
.smilie-button {
  background-color: #f1f1f1;

  &.smilie-button--show-face {
    background-position: center right;
    background-repeat: no-repeat;
    background-size: contain;
    border: none;

    background-image: url(~../assets/images/ace.svg);

    &.smilie-button--sad-face {
      background-image: url(~../assets/images/oh.svg);
    }
  }
}
</style>
