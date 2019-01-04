import Vue from 'vue';
import App from './App.vue';
import { sync } from 'vuex-router-sync';
import createRouter from './router';
import { createStore } from './store';

export function createApp() {
  const store = createStore();
  const router = createRouter();

  sync(store, router);

  const app = new Vue({
    router,
    store,
    render: h => h(App),
  });

  return { app, router, store };
}