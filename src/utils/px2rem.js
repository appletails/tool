export default {
  install: function (Vue) {
    Vue.prototype.$px2rem = function(size){
      if (this.$store.state.DCW <= 750) {
        return size * this.$store.state.DCW / 375
      }
      return size
    }
  }
}