import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: (resolve) => require(['@/components/main'], resolve),
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: (resolve) => require(['@/view/home'], resolve),
          meta: { keepAlive: true, title: '首页'},
        }
      ]
    }
  ]
})
