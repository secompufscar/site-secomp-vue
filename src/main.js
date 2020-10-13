import Vue from 'vue';
import { BootstrapVue } from 'bootstrap-vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHome,
  faUsers,
  faEnvelope,
  faMobileAlt,
  faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faYoutube,
  faTwitter,
  faFacebookF,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

library.add(faHome);
library.add(faUsers);
library.add(faEnvelope);
library.add(faMobileAlt);
library.add(faCalendarAlt);
library.add(faYoutube);
library.add(faTwitter);
library.add(faFacebookF);
library.add(faInstagram);

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
