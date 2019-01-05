import 'vuetify/dist/vuetify.min.css';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import fetchData from '../api';

Vue.use(Vuex);
Vue.use(Vuetify);

export default function () {
  return new Vuex.Store({
    state: {},
    modules: {},
    actions: {
      FETCH_ASYNC_DATA: ({ commit, dispatch, state }, type) => {
        return fetchData(type).then(data => data);
      },
    },
    mutations: {},
    getters: {},
  });
}
