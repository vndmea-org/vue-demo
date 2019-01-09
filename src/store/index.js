import 'vuetify/dist/vuetify.min.css';
import Vue from 'vue';
import Vuex from 'vuex';
import axios from '../api';

Vue.use(Vuex);

export default function() {
  return new Vuex.Store({
    state: {},
    modules: {},
    actions: {
      FETCH_USERS({ commit, state }, params) {
        return axios.fetchUsers(params).then(data => data);
      },
    },
    mutations: {},
    getters: {},
  });
}
