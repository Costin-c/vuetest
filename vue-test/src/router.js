import Vue from 'vue';
import vueRouter from 'vue-router';
import Home from './views/Home';

//使用路由
Vue.use(vueRouter);


//设置路径的
const routes = [
    {
      path: '/',
      component: Home
    },
    {
      path: '/learn',
      component: () => import('./views/Learn')
    },
    {
      path: '/Student',
      component: () => import('./views/Student')
    },
    {
      path: '/about',
      component: () => import('./views/About')
    },
    {
      path: '/activity',
      component: () => import('./views/Activity')
    },
  ];


  //路由配置参数
export default new vueRouter({
    mode: 'history',
    routes,
    linkActiveClass: 'link',
    linkExactActiveClass: 'linkactive'
  })