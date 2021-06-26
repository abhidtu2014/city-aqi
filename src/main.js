import Vue from 'vue'
import App from './App.vue'
import store from './store'

import ElementUI from 'element-ui';
import './services/charts'
import locale from 'element-ui/lib/locale/lang/en'

import 'element-ui/lib/theme-chalk/index.css';
import './styles/main.scss'

import initWebWorkerService from './services/worker-api'
initWebWorkerService();

Vue.use(ElementUI, { locale });
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
