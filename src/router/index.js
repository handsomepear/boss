import Vue from 'vue';

import VueRouter from 'vue-router';

import iView from 'iview';

import { routes } from './router';

Vue.use(VueRouter);

// 路由配置
const RouterConfig = {
  mode: 'history',
  routes
};

export const router = new VueRouter(RouterConfig);

// 添加LoadingBar组件 并且处理登录权限

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  // console.log(from.name)
  // console.log(to.matched)
  // if (to.matched.length === 0) {                                        //如果未匹配到路由
  //   next({
  //     replace: true,
  //     name: 'error-404'
  //   })
  // }
  next();
});

router.afterEach(route => {
  iView.LoadingBar.finish();
  // window.scrollTo(0, 0)
});
