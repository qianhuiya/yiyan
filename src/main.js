import Vue from 'vue';
import App from './App.vue';
import router from './router';
import config from './assets/basics-js/config.js';
import api from  "./qisong/center";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$config = config;

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
