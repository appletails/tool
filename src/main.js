// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import api from '@/common/api'
import $Modal from '@/utils/Modal'
import Modal from '@/components/Modal'
import store from '@/store'
Vue.component('Modal', Modal)
Vue.use(api)
Vue.use($Modal)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
