import ModalBus from './ModalBus'
export default {
  install: function (Vue) {
    Vue.prototype.$Modal = {
      remove: function () {
        ModalBus.$emit('remove')
      },
      info: function (message, title, callback) {
        if (typeof title === 'function') {
          callback = title
          title = null
        }
        ModalBus.$emit('info', { title: title, message: message, callback: callback })
      },
      alert: function (message, title, timeout) {
        if (typeof title === 'number') {
          timeout = title
          title = null
        }
        ModalBus.$emit('alert', { title: title, message: message, timeout: timeout || 3000 })
      },
      confirm: function (message, title, callback, options) {
        if (typeof title === 'function') {
          options = callback
          callback = title
          title = null
        }
        ModalBus.$emit('confirm', { title: title, message: message, callback: callback, options: options || null })
      }
    }
  }
}
