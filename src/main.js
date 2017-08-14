import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Meta from 'vue-meta';

import HomePage from './pages/home-page.vue';
import DefinitionsPage from './pages/definitions-page.vue';

Vue.use(VueRouter);
Vue.use(Meta);

const routes = [
  { path: '/', component: HomePage },
  { path: '/definitions', component: DefinitionsPage},
  { path: '*', redirect: '/' }
];

const router = new VueRouter({
  routes: routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
