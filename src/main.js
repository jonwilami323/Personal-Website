import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Vue from "vue";

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import Vuetify from 'vuetify'

import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.use(BootstrapVue);
Vue.use(Vuetify, {
  iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
