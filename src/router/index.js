import Vue from 'vue'
import Router from 'vue-router'
import routesArray from './routesArray'
import extendArray from './extendArray'

Vue.use(Router)

export default new Router({
  routes: routesArray.concat(extendArray)
})
