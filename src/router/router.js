import Main from '@/views/Main/Main.vue';

// 登录页面
export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: 'login - 登录'
  },
  component: resolve => {
    require(['@/views/Login/Login.vue'], resolve);
  }
};

// 错误页面
export const page403 = {
  path: '/403',
  name: 'error-403',
  meta: {
    title: '403-权限不足'
  },
  component: resolve => {
    require(['@/views/Errors/403.vue'], resolve);
  }
};

export const page404 = {
  path: '/*',
  name: 'error-404',
  meta: {
    title: '404-页面不存在'
  },
  component: resolve => {
    require(['@/views/Errors/404.vue'], resolve);
  }
};

export const page500 = {
  path: '/500',
  name: 'error-500',
  meta: {
    title: '500-服务端错误'
  },
  component: resolve => {
    require(['@/views/Errors/500.vue'], resolve);
  }
};

// 作为Main组件但是不在左侧菜单栏里面的路由
export const otherRouter = {
  path: '/',
  name: 'otherRouter',
  redirect: '/home',
  component: Main,
  children: [
    {
      path: 'home',
      name: 'home_index',
      component: resolve => {
        require(['@/views/Home/Home.vue'], resolve);
      }
    },
    {
      path: 'own',
      name: 'own',
      component: resolve => {
        require(['@/views/Own/Own.vue'], resolve);
      }
    }
  ]
};

// 作为Main组件并且在左侧菜单栏里面的路由
export const appRouters = [
  // 商户管理
  {
    path: '/merchant',
    name: 'merchant',
    icon: 'key',
    title: '商户管理',
    component: Main,
    children: [
      {
        path: 'enter-check',
        name: 'enterCheck',
        icon: 'ios-checkmark',
        title: '入驻管理',
        component: resolve => {
          require(['@/views/Merchant/EnterCheck.vue'], resolve);
        }
      },
      {
        path: 'contract-list',
        name: 'contractList',
        icon: 'ios-list',
        title: '合同管理',
        component: resolve => {
          require(['@/views/Merchant/ContractList.vue'], resolve);
        }
      },
      {
        path: 'store-manage',
        name: 'storeManage',
        icon: 'ios-home',
        title: '店铺管理',
        component: resolve => {
          require(['@/views/Merchant/StoreManage.vue'], resolve);
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
    children: [
      {
        path: 'goods-manage',
        name: 'goodsManage',
        icon: 'ios-cart',
        title: '商品管理',
        component: resolve => {
          require(['@/views/Commodity商品/GoodsManage.vue'], resolve);
        }
      },
      {
        path: 'category-manage',
        name: 'categoryManage',
        icon: 'ios-keypad',
        title: '品类管理',
        component: resolve => {
          require(['@/views/Commodity商品/CategoryManage.vue'], resolve);
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
    children: [
      {
        path: 'order-manage',
        name: 'orderManage',
        icon: 'document',
        title: '订单管理',
        component: resolve => {
          require(['@/views/Order订单/OrderManage.vue'], resolve);
        }
      },
      {
        path: 'settlement-manage',
        name: 'settlementManage',
        icon: 'ios-pricetags',
        title: '结算管理',
        component: resolve => {
          require(['@/views/Order订单/SettlementManage.vue'], resolve);
        }
      },
      {
        path: 'refund-manage',
        name: 'refundManage',
        title: '退款管理',
        icon: 'social-yen',
        component: resolve => {
          require(['@/views/Order订单/RefundManage.vue'], resolve);
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
    children: [
      {
        path: 'banner-manage',
        name: 'bannerManage',
        icon: 'images',
        title: 'Banner管理',
        component: resolve => {
          require(['@/views/Operation运营/bannerManage.vue'], resolve);
        }
      },
      {
        path: 'liver-manage',
        name: 'liverManage',
        icon: 'android-person',
        title: '生活家管理',
        component: resolve => {
          require(['@/views/Operation运营/LiverManage.vue'], resolve);
        }
      },
      {
        path: 'list-pits',
        name: 'listPits',
        icon: 'ios-list',
        title: '列表坑位',
        component: resolve => {
          require(['@/views/Operation运营/ListPits.vue'], resolve);
        }
      },
      {
        path: 'export-file',
        name: 'exportFile',
        icon: 'ios-download-outline',
        title: '导出文件',
        component: resolve => {
          require(['@/views/Operation运营/ExportFile.vue'], resolve);
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
    children: [
      {
        path: 'user-manage',
        name: 'userManage',
        icon: 'person-stalker',
        title: '用户管理',
        component: resolve => {
          require(['@/views/User/User.vue'], resolve);
        }
      },
      {
        path: 'vip-manage',
        name: 'vipManage',
        icon: 'android-star',
        title: '会员管理',
        component: resolve => {
          require(['@/views/User/VipManage.vue'], resolve);
        }
      }
    ]
  },
  // APP管理
  {
    path: '/app',
    name: 'app',
    title: 'App管理',
    icon: 'iphone',
    isShrink: false,
    component: Main,
    children: [
      {
        path: 'app-manage',
        name: 'appManage',
        title: 'app管理',
        icon: 'social-apple',
        component: resolve => {
          require(['@/views/App/AppManage.vue'], resolve);
        }
      },
      {
        path: 'app-version',
        name: 'appVersion',
        title: '版本管理',
        icon: 'social-vimeo',
        component: resolve => {
          require(['@/views/App/AppVersion.vue'], resolve);
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
          require(['@/views/System/StaffAcount.vue'], resolve);
        }
      },
      {
        path: 'role-manage',
        name: 'roleManage',
        icon: 'person',
        title: '角色管理',
        component: resolve => {
          require(['@/views/System/RoleManage.vue'], resolve);
        }
      },
      {
        path: 'contract-template',
        name: 'contractTemplate',
        icon: 'ios-paper-outline',
        title: '合同模板',
        component: resolve => {
          require(['@/views/System/ContractTemplate.vue'], resolve);
        }
      }
    ]
  }
];

export const routes = [
  loginRouter,
  otherRouter,
  page403,
  ...appRouters,
  page404,
  page500
];
