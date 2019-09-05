import Vue from 'vue'
import Router from 'vue-router'
import routerConfig from './router.config'

Vue.use(Router)

export default new Router({
  routes: [
    ...routerConfig.map(item => {
      item.component = () => import(`@/view/${item.name}`)
      return item
    })
  ]
})
