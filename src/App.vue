<template>
  <div id="app" class="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    name: 'app',
    data () {
      return {
      };
    },
    methods: {
    },
    created: function() {
    }
  }
</script>

<style lang="scss">
  .app {
    padding: 50px 0;
  }
</style>
