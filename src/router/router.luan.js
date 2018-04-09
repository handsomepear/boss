import Main from '@/pages/Main/Main.vue'

// 登录页面
export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: 'login - 登录'
  },
  component: resolve => {
    require(['@/pages/Login/Login.vue'], resolve)
  }
}

// 错误页面
export const page403 = {
  path: '/403',
  name: 'error-403',
  meta: {
    title: '403-权限不足'
  },
  component: resolve => {
    require(['@/pages/Errors/403.vue'], resolve)
  }
}

export const page404 = {
  path: '/*',
  name: 'error-404',
  meta: {
    title: '404-页面不存在'
  },
  component: resolve => {
    require(['@/pages/Errors/404.vue'], resolve)
  }
}

export const page500 = {
  path: '/500',
  name: 'error-500',
  meta: {
    title: '500-服务端错误'
  },
  component: resolve => {
    require(['@/pages/Errors/500.vue'], resolve)
  }
}

// 作为Main组件但是不在左侧菜单栏里面的路由
export const otherRouter = {
  path: '/',
  name: 'otherRouter',
  redirect: '/home',
  component: Main,
  children: [{
    path: 'home',
    name: 'home_index',
    component: resolve => {
      require(['@/pages/Home/Home.vue'], resolve)
    }
  },
    {
      path: 'own',
      name: 'own',
      component: resolve => {
        require(['@/pages/Own/Own.vue'], resolve)
      }
    }
  ]
}

// 作为Main组件并且在左侧菜单栏里面的路由
export const appRouters = [
  // 商户管理
  {
    path: '/authority',
    name: 'authority',
    icon: 'key',
    title: '商户管理',
    component: Main,
    children: [{
      path: 'enter-check',
      name: 'enterCheck',
      icon: 'ios-checkmark',
      title: '入驻管理',
      component: resolve => {
        require(['@/pages/Contract（合同）/EnterCheck.vue'], resolve)
      }
    },
      {
        path: 'contract-list',
        name: 'contractList',
        icon: 'ios-list',
        title: '合同管理',
        component: resolve => {
          require(['@/pages/Contract（合同）/ContractList.vue'], resolve)
        }
      },
      {
        path: 'store-manage',
        name: 'storeManage',
        icon: 'ios-home',
        title: '店铺管理',
        component: resolve => {
          require(['@/pages/StoreLiver（店铺生活家）/StoreManage.vue'], resolve)
        }
      }
    ]
  },
  // 商品管理
  {
    path: '/commodity',
    name: 'commodity',
    icon: 'bag',
    title: '商品管理',
    isShrink: true,
    component: Main,
    children: [{
      path: 'goods-manage',
      name: 'goodsManage',
      icon: 'ios-cart',
      title: '商品管理',
      component: resolve => {
        require(['@/pages/Commodity（商品）/GoodsManage.vue'], resolve)
      }
    },
      {
        path: 'category-manage',
        name: 'categoryManage',
        icon: 'ios-cart',
        title: '品类管理',
        component: resolve => {
          require(['@/pages/Commodity（商品）/CategoryManage.vue'], resolve)
        }
      }
    ]
  },
  // 订单结算
  {
    path: '/order',
    name: 'order',
    title: '订单管理',
    icon: 'drag',
    isShrink: true,
    component: Main,
    children: [{
      path: 'order-manage',
      name: 'orderManage',
      icon: 'document',
      title: '订单管理',
      component: resolve => {
        require(['@/pages/Order（订单）/OrderManage.vue'], resolve)
      }
    },
      {
        path: 'settlement-manage',
        name: 'settlementManage',
        icon: 'ios-pricetags',
        title: '结算管理',
        component: resolve => {
          require(['@/pages/Financial/SettlementManage.vue'], resolve)
        }
      },
      {
        path: 'refund-manage',
        name: 'refundManage',
        title: '退款管理',
        icon: 'social-yen',
        component: resolve => {
          require(['@/pages/Refund（退款）/RefundManage.vue'], resolve)
        }
      }
    ]
  },
  // 运营管理
  {
    path: '/operation',
    name: 'operation',
    title: '运营管理',
    icon: 'ios-people',
    component: Main,
    isShrink: true,
    children: [{
      path: 'banner-manage',
      name: 'bannerManage',
      icon: 'images',
      title: 'Banner管理',
      component: resolve => {
        require(['@/pages/MarketingCenter（营销中心）/bannerManage.vue'], resolve)
      }
    },
      {
        path: 'liverManage',
        name: 'liverManage',
        icon: 'android-person',
        title: '生活家管理',
        component: resolve => {
          require(['@/pages/StoreLiver（店铺生活家）/LiverManage.vue'], resolve)
        }
      },
      {
        path: 'listPits',
        name: 'listPits',
        icon: 'android-person',
        title: '列表坑位',
        component: resolve => {
          require(['@/pages/Operation（运营）/ListPits.vue'], resolve)
        }
      },
      {
        path: 'export-file',
        name: 'exportFile',
        icon: 'ios-download-outline',
        title: '导出文件',
        component: resolve => {
          require(['@/pages/Operation（运营）/ExportFile.vue'], resolve)
        }
      }
    ]
  },
  // 用户管理
  {
    path: '/user',
    name: 'user',
    title: '用户管理',
    icon: 'person',
    isShrink: true,
    component: Main,
    children: [{
      path: 'user-manage',
      name: 'userManage',
      icon: 'person-stalker',
      title: '用户管理',
      component: resolve => {
        require(['@/pages/User（用户）/User.vue'], resolve)
      }
    },
      {
        path: 'vip-manage',
        name: 'vipManage',
        icon: 'person-stalker',
        title: '会员管理',
        component: resolve => {
          require(['@/pages/User（用户）/VipManage.vue'], resolve)
        }
      }
    ]
  },
  // APP管理
  {
    path: '/app',
    name: 'app',
    title: 'App管理',
    icon: 'person',
    isShrink: false,
    component: Main,
    children: [{
      path: 'app-manage',
      name: 'appManage',
      title: 'app管理',
      icon: 'social-apple',
      component: resolve => {
        require(['@/pages/System/AppManage.vue'], resolve)
      }
    },
      {
        path: 'app-version',
        name: 'appVersion',
        title: '版本管理',
        icon: 'social-vimeo',
        component: resolve => {
          require(['@/pages/System/AppVersion.vue'], resolve)
        }
      }
    ]
  },
  // 系统管理
  {
    path: '/system',
    name: 'system',
    title: '系统管理',
    icon: 'gear-b',
    isShrink: true,
    component: Main,
    children: [
      {
        path: 'staff-acount',
        name: 'staffAcount',
        icon: 'person-stalker',
        title: '员工账号',
        component: resolve => {
          require(['@/pages/Authority（权限）/StaffAcount.vue'], resolve)
        }
      },
      {
        path: 'role-manage',
        name: 'roleManage',
        icon: 'person',
        title: '角色管理',
        component: resolve => {
          require(['@/pages/Authority（权限）/RoleManage.vue'], resolve)
        }
      },
      {
        path: 'contract-template',
        name: 'contractTemplate',
        icon: 'ios-paper-outline',
        title: '合同模板',
        component: resolve => {
          require(['@/pages/Contract（合同）/ContractTemplate.vue'], resolve)
        }
      }
    ]
  }
]

export const routes = [
  loginRouter,
  otherRouter,
  page403,
  ...appRouters,
  page404,
  page500

]
