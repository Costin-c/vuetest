import Vue from 'vue';
import vueRouter from 'vue-router';
import Home from './views/Home';

//使用路由
Vue.use(vueRouter);


//设置路径的
const routes = [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/learn',
      component: () => import('./views/Learn')
    },
    {
      path: '/student',
      component: () => import('./views/Student')
    },
    {
      path: '/about',
      component: () => import('./views/About')
    },
    {
      path: '/activity',
      component: () => import(/* webpackChunkName: 'AAA' */'./views/Activity'),
      // 方法一
      // redirect (to) {
      //   return {
      //     name: 'a',
      //   }
      // },
      // 方法二
      // redirect: '/activity/a',
      // 方法三
      redirect: {name: 'a'},
      
      children: [
        {
          path: 'a',
          name: 'a',
          component: () => import(/* webpackChunkName: 'AAA' */'./views/A')
        },
        {
          path: 'b',
          name: 'b',
          component: () => import('./views/B')
        },
        {
          path: 'c',
          name: 'c',
          component: () => import('./views/C')
        },
      ]
    },
  ];


  //路由配置参数
export default new vueRouter({
    mode: 'history',
    routes,
  })