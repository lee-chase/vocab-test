<template>
  <div id="app" class="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import Vue from 'vue';
  // const defaultAvatar = require('assets/resources/default-avatar.png');
  // const favIcon = require('./assets/images/favicon.ico');

  export default {
    name: 'app',
    data () {
      return {
        // favIconPath: favIcon
      };
    },
    methods: {
    },
    created: function() {
    },
    metaInfo: {
      title: 'Vocab-test',
      meta: [
        { charset: 'utf-8' },
        { IE: 'edge' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, minimal-ui' },
        { 'apple-mobile-web-app-capable': 'yes' },
        { 'mobile-web-app-capable': 'yes' }
      ],
      // link: [
      //   { rel: 'shortcut icon', type: 'image/x-icon', href: this.favIconPath },
      //   { rel: 'apple-touch-icon', href: './assets/images/app-ico-120.png' },
      //   { rel: 'apple-touch-icon', sizes: '152x152', href: './assets/images/app-ico-152.png' },
      //   { rel: 'apple-touch-icon', sizes: '167x167', href: './assets/images/app-ico-167.png' },
      //   { rel: 'apple-touch-icon', sizes: '180x180', href: './assets/images/app-ico-180.png' },
      //   { rel: 'icon', sizes: '192x192', href: './assets/images/app-ico-192.png' },
      //   { rel: 'icon', sizes: '128x128', href: './assets/images/app-ico-128.png' },
      // ]
    }
  }
</script>

<style lang="scss">
  .app {
    padding: 50px 0;
  }
</style>
