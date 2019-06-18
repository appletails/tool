export default {
  install: function (Vue) {
    Vue.prototype.$account = {
      test: function () {
        return 'this is a test'
      }
    }
  }
}
