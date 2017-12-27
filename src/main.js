// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routes from './router/router'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
import { fetch, post } from './util/http.js'

// 封装axios的get请求
Vue.prototype.$fetch = fetch;

// 封装axios的post请求
Vue.prototype.$post = post;
Vue.config.productionTip = false

Vue.use(iview)
Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode: "hash"
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
