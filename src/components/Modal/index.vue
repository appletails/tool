<template>
  <div v-if="modal" class="modal">
    <div v-if="title" class="modal-title">{{title}}</div>
    <div class="modal-main info">
      <div class="modal-main-message">{{message}}</div>
      <div v-if="!modalType.alert" class="modal-main-btn">
        <button @click="ok()">ok</button>
        <button v-if="modalType.confirm" @click="cancelf()" class="cancel">close</button>
      </div>
    </div>
  </div>
</template>
<script>
import ModalBus from '@/utils/Modal/ModalBus'
import { setTimeout } from 'timers'
export default {
  name: 'Modal',
  data () {
    return {
      modal: false,
      modalType: {
        info: false,
        success: false,
        warning: false,
        error: false,
        confirm: false
      },
      title: '',
      message: '',
      callback: null,
      cancel: null
    }
  },
  methods: {
    remove () {
      this.modal = false
      this.modalType = {
        info: false,
        success: false,
        warning: false,
        error: false,
        confirm: false
      }
      this.callback = null
      this.cancel = null
    },
    ok () {
      if (this.callback) this.callback()
      this.remove()
    },
    cancelf () {
      if (this.cancel) this.cancel()
      this.remove()
    }
  },
  created () {
    ModalBus.$on('remove', () => {
      this.remove()
    })
    ModalBus.$on('info', params => {
      this.remove()
      this.modal = true
      this.modalType.info = true
      this.title = params.title
      this.message = params.message
      if (typeof params.callback === 'function' && params.callback) { this.callback = params.callback }
    })
    ModalBus.$on('alert', params => {
      this.remove()
      this.modal = true
      this.modalType.alert = true
      this.title = params.title
      this.message = params.message
      setTimeout(() => {
        if (this.modalType.alert) { this.remove() }
      }, params.timeout)
    })
    ModalBus.$on('confirm', params => {
      this.remove()
      this.modal = true
      this.modalType.confirm = true
      this.title = params.title
      this.message = params.message
      if (typeof params.callback === 'function' && params.callback) { this.callback = params.callback }
      if (typeof params.options === 'function' && params.options) { this.cancel = params.options }
    })
  }
}
</script>
<style lang="less" scoped>
.modal {
  z-index: 300;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  min-width: 2rem;
  max-width: 3rem;
  // min-height: 160px;
  background-color: #fff;
  border-radius: 4px;
  padding: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,.15);
  &-title {
    text-align: center;
    font-weight: bold;
    font-size: 0.16rem;
    min-height: 0.3rem;
    line-height: 0.3rem;
  }
  &-main {
    &-message {
      // min-height: 50px;
      line-height: 0.3rem;
      font-size: 0.14rem;
      text-align: center;
    }
    &-btn {
      .flex();
      margin-top: 0.1rem;
      height: 0.34rem;
      button {
        flex: 1;
        height: 100%;
        background-color: @info;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 0.14rem;
        &:not(first-of-type) {
          margin-left: 0.06rem;
        }
      }
      .cancel {
        background-color: #fff;
        color: @font;
        border: 1px solid @border;
      }
    }
  }
}
</style>
