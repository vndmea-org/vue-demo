import Vue from "vue";
import Vuex from "vuex";
import Vuetify from "vuetify";
import { fetchData } from "../api";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuex);
Vue.use(Vuetify);

export function createStore() {
  return new Vuex.Store({
    state: {},
    modules: {},
    actions: {
      FETCH_ASYNC_DATA: ({ commit, dispatch, state }, type) => {
        return fetchData(type).then(data => data);
      }
    },
    mutations: {},
    getters: {}
  });
}
