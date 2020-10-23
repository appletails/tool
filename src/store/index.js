import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    DCW: document.documentElement.clientWidth // 动态监听屏幕宽度
  },
  getters: {},
  mutations: {
    CHANGEDCW (state) {
      state.DCW = document.documentElement.clientWidth
    }
  },
  actions: {},
  modules: {}
})
