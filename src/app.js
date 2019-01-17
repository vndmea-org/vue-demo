import './mock/mock-data';
import 'vuetify/dist/vuetify.min.css';

import en from './i18n/en-US';
import zh from './i18n/zh-CN';
import { sync } from 'vuex-router-sync';
import Vue from 'vue';
import App from './App.vue';
import Tab from './components/tab';
import Vuetify, {
  VLayout,
  VApp,
  VContainer,
  VFlex,
  VBtn,
  VCard,
  VTab,
  VTabs,
  VTabItem,
  VTextField,
  VForm
} from 'vuetify/lib';

Vue.directive('layout', VLayout);
Vue.use(Tab);
Vue.use(Vuetify, {
  components: {
    VLayout,
    VApp,
    VBtn,
    VContainer,
    VFlex,
    VCard,
    VTab,
    VTabs,
    VTabItem,
    VTextField,
    VForm
  },
  lang: {
    locales: { en, zh },
    current: 'zh'
  }
});

import createRouter from './router';
import createStore from './store';

export default function() {
  const store = createStore();
  const router = createRouter();

  sync(store, router);

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  });

  document.title = app.$vuetify.t(app.$vuetify.t('$vuetify.indexPageTitle'));

  router.beforeEach((to, from, next) => {
    if (to.meta.content) {
      let head = document.getElementsByTagName('head');
      let meta = document.createElement('meta');
      meta.content = to.meta.content;
      head[0].appendChild(meta);
    }

    if (to.meta.title) {
      console.log(app.$vuetify.lang.current, to.meta.title);
      document.title = app.$vuetify.t(to.meta.title);
    }
    next();
  });

  return { app, router, store };
}
