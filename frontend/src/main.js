import Vue from 'vue'
import App from './App.vue'
import router from './router'

//用于生产模式部署
//Vue.config.productionTip = false;
Vue.config.devtools = true;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
