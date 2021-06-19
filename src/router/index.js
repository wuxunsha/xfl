import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: (resolve) => require(['@/components/mainIndex'], resolve),
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: (resolve) => require(['@/view/home'], resolve),
          meta: { keepAlive: true, title: '首页'},
        },
        {
          path: '/lxwm',
          name: 'lxwm',
          component: (resolve) => require(['@/view/lxwm'], resolve),
          meta: { keepAlive: true, title: '联系我们'},
        },
        {
          path: '/zhlhz',
          name: 'zhlhz',
          component: (resolve) => require(['@/view/zhlhz'], resolve),
          meta: { keepAlive: true, title: '战略合作'},
        },
        {
          path: '/shwhz',
          name: 'shwhz',
          component: (resolve) => require(['@/view/shwhz'], resolve),
          meta: { keepAlive: true, title: '商务合作'},
        },
        {
          path: '/pinpaixx',
          name: 'pinpaixx',
          component: (resolve) => require(['@/view/pinpaixx'], resolve),
          meta: { keepAlive: true, title: '品牌形象'},
        },
        {
          path: '/pinpaitx',
          name: 'pinpaitx',
          component: (resolve) => require(['@/view/pinpaitx'], resolve),
          meta: { keepAlive: true, title: '品牌体系'},
        },
        {
          path: '/mfstzb',
          name: 'mfstzb',
          component: (resolve) => require(['@/view/mfstzb'], resolve),
          meta: { keepAlive: true, title: '买房送套装包'},
        },
        {
          path: '/zztx',
          name: 'zztx',
          component: (resolve) => require(['@/view/zztx'], resolve),
          meta: { keepAlive: true, title: '整装科技'},
        },
        {
          path: '/xiangmuanli',
          name: 'xiangmuanli',
          component: (resolve) => require(['@/view/xiangmuanli'], resolve),
          meta: { keepAlive: true, title: '项目案例'},
        },
        {
          path: '/dcxm',
          name: 'dcxm',
          component: (resolve) => require(['@/view/dcxm'], resolve),
          meta: { keepAlive: true, title: '地产项目'},
        },
        {
          path: '/dcxmDetails',
          name: 'dcxmDetails',
          component: (resolve) => require(['@/view/dcxmDetails'], resolve),
          meta: { keepAlive: true, title: '地产项目详情'},
        },
        {
          path: '/kjfg',
          name: 'kjfg',
          component: (resolve) => require(['@/view/kjfg'], resolve),
          meta: { keepAlive: true, title: '空间风格'},
        },
        {
          path: '/kjfgDetails',
          name: 'kjfgDetails',
          component: (resolve) => require(['@/view/kjfgDetails'], resolve),
          meta: { keepAlive: true, title: '空间风格详情'},
        },
        {
          path: '/zxzhx',
          name: 'zxzhx',
          component: (resolve) => require(['@/view/zxzhx'], resolve),
          meta: { keepAlive: true, title: '资讯中心'},
        },
        {
          path: '/ydzxDetails',
          name: 'ydzxDetails',
          component: (resolve) => require(['@/view/ydzxDetails'], resolve),
          meta: { keepAlive: true, title: '资讯详情'},
        },
        {
          path: '/questionnaires',
          name: 'questionnaires',
          component: (resolve) => require(['@/view/questionnaires'], resolve),
          meta: { keepAlive: true, title: '一键咨询'},
        }
      ]
    }
  ]
})
