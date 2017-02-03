/**
 *
 * @author arman
 * @since 02/03/17.
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import __Header from './components/dumb/header.component';
import __Footer from './components/dumb/footer.component';
import AppContainer from './components/smart/app.container';
import NewPerson from './components/smart/new-person.container';

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: AppContainer},
    {path: '/new', component: NewPerson}
  ]
});

/* eslint-disable no-new */
new Vue({
  router,
  template: `<div id="app">
              <__Header></__Header>
              <div class="content__body"><router-view></router-view></div>
              <__Footer></__Footer>
            </div>`,
  components: {
    __Header,
    __Footer
  }
}).$mount('#app');
