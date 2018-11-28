import Vue from 'vue';
import { createApp } from './app';

const { app } = createApp();

window.onload = () => {
  app.$mount('#app');
};
