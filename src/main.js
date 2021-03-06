// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import store from './store/index.js'
import './assets/iconfont/iconfont.css'
import 'lib-flexible/flexible.js'
import './utils/registerVant'
import 'vant/lib/index.css'

import VueAnimateNumber from 'vue-animate-number'
Vue.use(VueAnimateNumber)

router.afterEach((to, from, next) => {
    window.scrollTo(0, 0)
})

router.beforeEach((to, from, next) => {
    let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
    if (flag) {
        console.log("移动端")
        store.commit('setUserAgent', 'h5')
        if (to.meta.title) {
            document.title = to.meta.title;
        }
        next()
    } else {
        console.log("pc端")
        store.commit('setUserAgent', 'pc')
        if (to.meta.title) {
            document.title = to.meta.title;
        }
        next()
    }
})

Vue.config.productionTip = false

Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
})