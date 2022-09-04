import Vue from 'vue';
import VueHtmlToPaper from 'vue-html-to-paper';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

const options = {
  name: '_blank',
  specs: [
    'fullscreen=yes',
    'titlebar=yes',
    'scrollbars=yes',
  ],
  styles: [
    'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css',
    'https://unpkg.com/kidlat-css/css/kidlat.css',
  ],
  autoClose: true,
};

Vue.use(VueHtmlToPaper, options);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
