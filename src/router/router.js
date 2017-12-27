
import App from '../App'

// 按需加载路由
const user = r => require.ensure([], () => r(require('../components/user')), 'user')

const seller = r => require.ensure([], () => r(require('../components/seller')), 'seller')

const order = r => require.ensure([], () => r(require('../components/order')), 'order')


const routes = [

  {
    path: '',
    redirect: '/seller'
  },
  {
    path: '/seller',
    component: seller
  },
  {
    path: '/order',
    component: order
  },
  {
    path: '/user',
    component: user
  }
];
export default routes;