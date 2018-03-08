// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import {router} from './router'
import store from './store/index.js'
import iview from 'iview'
// import 'iview/src/styles/index.less'
/* 引入自己的样式 覆盖默认样式 */
import '@/assets/css/my-iview.less'
import { get, post } from './util/http.js'

Vue.config.productionTip = false
Vue.use(iview)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
