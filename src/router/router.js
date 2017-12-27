
import App from '../App'

// 按需加载路由
const Login = r => require.ensure([], () => r(require('@/pages/Login/Login')), 'Login')
const Home = r => require.ensure([], () => r(require('@/pages/Home/Home')), 'Home')

const routes = [
  // 登陆页面
  {
    path: '/login',
    component: Login
  },
  // 登录之后首页
  {
    path: '/home',
    component: Home
  }
];
export default routes;