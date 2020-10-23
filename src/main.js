// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import $Modal from '@/utils/Modal'
import Modal from '@/components/Modal'
import store from '@/store'
import $px2rem from '@/utils/px2rem'
Vue.component('Modal', Modal)
Vue.use($Modal)
Vue.use($px2rem)

Vue.config.productionTip = false
router.beforeEach( async (to, from, next) => {
  next()
  // if (to.name !== 'Login') {
  //   try {
  //     const res = await getUser()
  //     if (res.status === 2){
  //       next('/login')
  //     }else{
  //       next()
  //     }
  //   } catch (e) {
  //     next('/login')
  //   }
  // } else {
  //   next()
  // }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
