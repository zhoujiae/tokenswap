import Vue from "vue";
import ElementUI from "element-ui";
import VueI18n from 'vue-i18n';
import "@/styles/element-variables.scss";
import App from "./App.vue";
import router from "./router";

var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo)

import {
  en,
  zh,
  한국어
} from '@/constants';
import * as filters from '@/utils/filters.js';
Vue.config.productionTip = false;

Vue.use(ElementUI);

Vue.use(VueI18n);
const lang = localStorage.getItem('hash_lang') || window.navigator.language || window.navigator
  .userLanguage;
const i18n = new VueI18n({
  locale: lang.match('zh') ? 'zh' : 'en',
  messages: {
    en,
    zh,
    한국어
  }
});

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));
new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount("#app");