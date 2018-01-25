
import Main from '@/pages/Main/Main.vue';

// 登录页面
export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: 'login - 登录'
  },
  component: resolve => { require(['@/pages/Login/Login.vue'], resolve) }
}

// 错误页面
export const page403 = {
  path: '/403',
  name: 'error-403',
  meta: {
    title: '403-权限不足'
  },
  component: resolve => { require(['@/pages/Errors/403.vue'], resolve) }
}

export const page404 = {
  path: '/*',
  name: 'error-404',
  meta: {
    title: '404-页面不存在'
  },
  component: resolve => { require(['@/pages/Errors/404.vue'], resolve) }
}

export const page500 = {
  path: '/500',
  name: 'error-500',
  meta: {
    title: '500-服务端错误'
  },
  component: resolve => { require(['@/pages/Errors/500.vue'], resolve) }
}

// 作为Main组件但是不在左侧菜单栏里面的路由
export const otherRouter = {
  path: '/',
  name: 'otherRouter',
  redirect: '/home',
  component: Main,
  children: [
    { path: 'home', name: 'home_index', component: resolve => { require(['@/pages/Home/Home.vue'], resolve) } },
    { path: 'own', name: 'own', component: resolve => { require(['@/pages/Own/Own.vue'], resolve) } },
  ]
}

// 作为Main组件并且在左侧菜单栏里面的路由
export const appRouters = [
  // 权限管理
  {
    path: '/authority',
    name: 'authority',
    icon: 'key',
    title: "权限管理",
    component: Main,
    children: [
      {
        path: 'role-manage',
        name: 'roleManage',
        icon: 'person',
        title: '角色管理',
        component: resolve => { require(['@/pages/Authority（权限）/RoleManage.vue'], resolve) }
      },
      {
        path: 'staff-acount',
        name: 'staffAcount',
        icon: 'person-stalker',
        title: '员工账号',
        component: resolve => { require(['@/pages/Authority（权限）/StaffAcount.vue'], resolve) }
      }
    ]
  },
  // 合同管理
  {
    path: '/contract',
    name: 'contract',
    icon: 'clipboard',
    title: "合同管理",
    component: Main,
    children: [
      {
        path: 'enter-check',
        name: 'enterCheck',
        icon: 'ios-checkmark',
        title: '入驻审核',
        component: resolve => { require(['@/pages/Contract（合同）/EnterCheck.vue'], resolve); }
      },
      {
        path: 'contract-list',
        name: 'contractList',
        icon: 'ios-list',
        title: '合同列表',
        component: resolve => { require(['@/pages/Contract（合同）/ContractList.vue'], resolve); }
      },
      {
        path: 'contract-template',
        name: 'contractTemplate',
        icon: 'ios-paper-outline',
        title: '合同模板',
        component: resolve => { require(['@/pages/Contract（合同）/ContractTemplate.vue'], resolve); }
      }
    ]
  },
  // 商户管理
  {
    path: '/merchant',
    name: 'merchant',
    title: "商户管理",
    icon: 'android-people',
    component: Main,
    children: [
      {
        path: 'amusement',
        name: 'amusement',
        icon: 'ios-americanfootball',
        title: '游乐商户管理',
        component: resolve => { require(['@/pages/Merchant（商户）/Amusement.vue'], resolve) }
      },
      {
        path: 'education',
        name: 'education',
        icon: 'university',
        title: '教育商户管理',
        component: resolve => { require(['@/pages/Merchant（商户）/Education.vue'], resolve) }
      }
    ]
  },
  // 商品管理
  {
    path: '/commodity',
    name: 'commodity',
    icon: 'bag',
    title: "商品管理",
    component: Main,
    children: [
      {
        path: 'amusement',
        name: 'amusementCommodity',
        icon: 'ios-americanfootball',
        title: '游乐商品管理',
        component: resolve => { require(['@/pages/Commodity（商品）/Amusement.vue'], resolve) }
      },
      {
        path: 'education',
        name: 'educationCommodity',
        icon: 'university',
        title: '教育商品管理',
        component: resolve => { require(['@/pages/Commodity（商品）/Education.vue'], resolve) }
      }
    ]
  },
  // 订单管理
  {
    path: '/order',
    name: 'order',
    title: "订单管理",
    icon: 'drag',
    component: Main,
    children: [
      {
        path: 'amusement',
        name: 'amusementOrder',
        icon: 'ios-americanfootball',
        title: '游乐订单管理',
        component: resolve => { require(['@/pages/Order（订单）/Amusement.vue'], resolve) }
      },
      {
        path: 'education',
        name: 'educationOrder',
        icon: 'university',
        title: '教育订单管理',
        component: resolve => { require(['@/pages/Order（订单）/Education.vue'], resolve) }
      }
    ]
  },
  // 用户管理
  {
    path: '/user',
    name: 'user',
    title: "用户管理",
    icon: 'person',
    isShrink: false,
    component: Main,
    children: [
      {
        path: 'index',
        name: 'user_index',
        icon: 'person-stalker',
        title: '用户管理',
        component: resolve => { require(['@/pages/User（用户）/User.vue'], resolve) }
      }
    ]
  },
  // 营销中心
  {
    path: '/marketing-center',
    name: 'marketingCenter',
    title: "营销中心",
    icon: 'chatbubble-working',
    component: Main,
    children: [
      {
        path: 'banner-manage',
        name: 'bannerManage',
        icon: 'images',
        title: 'Banner管理',
        component: resolve => { require(['@/pages/MarketingCenter（营销中心）/bannerManage.vue'], resolve) }
      },
      {
        path: 'famous-person',
        name: 'famousPerson',
        icon: 'android-person',
        title: '名人堂推荐',
        component: resolve => { require(['@/pages/MarketingCenter（营销中心）/FamousPerson.vue'], resolve) }
      },
      {
        path: 'same-mother',
        name: 'sameMother',
        icon: 'woman',
        title: '同龄妈妈推荐',
        component: resolve => { require(['@/pages/MarketingCenter（营销中心）/SameMother.vue'], resolve) }
      }
    ]
  },
  // 运营管理
  {
    path: '/operation',
    name: 'operation',
    title: "运营管理",
    icon: 'ios-people',
    component: Main,
    isShrink: true,
    children: [
      {
        path: 'export-file',
        name: 'exportFile',
        icon: 'ios-download-outline',
        title: '导出文件',
        component: resolve => { require(['@/pages/Operation（运营）/ExportFile.vue'], resolve) }
      }
    ]
  },
  // 客服管理
  {
    path: '/custom-service',
    name: 'customService',
    icon: 'chatbubbles',
    title: "客服管理",
    component: Main,
    children: [
      {
        path: 'amusement-appraise',
        name: 'amusementAppraise',
        icon: 'ios-americanfootball-outline',
        title: '游乐评价',
        component: resolve => { require(['@/pages/CustomerService（客服）/AmusementAppraise.vue'], resolve) }
      },
      {
        path: 'education-appraise',
        name: 'educationAppraise',
        icon: 'university',
        title: '教育评价',
        component: resolve => { require(['@/pages/CustomerService（客服）/EducationAppraise.vue'], resolve) }
      },
      {
        path: 'amusement-enquiry',
        name: 'amusementEnquiry',
        icon: 'ios-americanfootball-outline',
        title: '游乐问询',
        component: resolve => { require(['@/pages/CustomerService（客服）/AmusementEnquiry.vue'], resolve) }
      },
      {
        path: 'education-enquiry',
        name: 'educationEnquiry',
        icon: 'university',
        title: '教育问询',
        component: resolve => { require(['@/pages/CustomerService（客服）/EducationEnquiry.vue'], resolve) }
      }
    ]
  },
  // 设备管理
  {
    path: '/equipment',
    name: 'equipment',
    title: "设备管理",
    icon: 'usb',
    component: Main,
    children: [
      {
        path: 'pos-manage',
        name: 'posManage',
        icon: 'outlet',
        title: 'POS管理',
        component: resolve => { require(['@/pages/Equipment（设备）/PosManage.vue'], resolve) }
      },
    ]
  },
  // 结算管理
  {
    path: '/settlement',
    name: 'settlement',
    title: "结算管理",
    icon: 'calculator',
    component: Main,
    children: [
      {
        path: 'amusement',
        name: 'amusementSettlement',
        icon: 'ios-americanfootball-outline',
        title: '游乐结算',
        component: resolve => { require(['@/pages/Settlement（结算）/amusement.vue'], resolve) }
      },
      {
        path: 'education',
        name: 'educationSettlement',
        icon: 'university',
        title: '教育结算',
        component: resolve => { require(['@/pages/Settlement（结算）/Education.vue'], resolve) }
      }
    ]
  },
  // 退款管理
  {
    path: '/refund',
    name: 'refund',
    title: "退款管理",
    icon: 'social-yen-outline',
    component: Main,
    children: [
      {
        path: 'amusement',
        name: 'amusementRefund',
        title: '游乐退款',
        icon: 'ios-americanfootball-outline',
        component: resolve => { require(['@/pages/Refund（退款）/amusement.vue'], resolve) }
      },
      {
        path: 'education',
        name: 'educationRefund',
        icon: 'university',
        title: '教育退款',
        component: resolve => { require(['@/pages/Refund（退款）/Education.vue'], resolve) }
      }
    ]
  },
];

export const routes = [
  loginRouter,
  otherRouter,
  page403,
  ...appRouters,
  page404,
  page500,

]