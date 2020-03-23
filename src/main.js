import Vue                  from 'vue'
import ElementUI            from 'element-ui'
import App                  from './App.vue'
import Router               from 'vue-router'
import routerRoutes         from './configs/router/index.js'
import VeLine               from 'v-charts/lib/line.common'
import VeGauge              from 'v-charts/lib/gauge.common'
import VeHistogram          from 'v-charts/lib/histogram.common'
import VueNoty              from 'vuejs-noty'
import locale               from 'element-ui/lib/locale/lang/en'
import                      'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI, { locale })
Vue.use(Router)
Vue.component(VeLine.name, VeLine)
Vue.component(VeGauge.name, VeGauge)
Vue.component(VeHistogram.name, VeHistogram)
Vue.use(VueNoty, {
  killer: true,
  timeout: 6000,
  progressBar: true,
  layout: 'bottomRight',
  theme: 'bootstrap-v3'
})

Vue.config.productionTip = false

const router = new Router({
  mode: 'history',
  routes: routerRoutes,
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
