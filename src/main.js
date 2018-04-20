// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

//引入路由
import router from './router'

// 引入 promise 兼容
import es6_promise from 'es6-promise'
es6_promise.polyfill();

//引入自定义工具类
import * as util from './common/js/util'
//Vue.prototype.$util = util;
// 引入字体大小
import './common/js/common'
//引入vue过滤器
import './common/vueFilter/vueFilter'
//引入Vuex
import store from './store/store'

/* eslint-disable no-new */
new Vue({
  el: '#mjiaapp',
  router,
  components: { App },
  template: '<App/>'
})
