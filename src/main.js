import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import Router from 'vue-router';
import routerRoutes from './configs/router/index.js'

Vue.use(ElementUI);
Vue.use(Router);

Vue.config.productionTip = false;

const router = new Router({
  mode: 'history',
  routes: routerRoutes,
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
