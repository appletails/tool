<template>
  <div>
    <button class="tail_btn">text</button>
    <button class="tail_btn tail_btn_info" @click="info()">info</button>
    <button class="tail_btn tail_btn_success" @click="alert()">Success alert</button>
    <button class="tail_btn tail_btn_warning" @click="confirm()">Warning confirm</button>
    <button class="tail_btn tail_btn_error" @click="$Modal.remove()">error close</button>
  </div>
</template>

<script>
import { cent, datetamp, timestamp } from '@/filters'
export default {
  name: 'Button',
  filters: {
    cent,
    datetamp,
    timestamp
  },
  data () {
    return {
    }
  },
  methods: {
    confirm () {
      this.$Modal.confirm('this is a confirm', 'this is a title', () => {
        console.log('ok')
      }, () => {
        console.log('cencal')
      })
    },
    info () {
      this.$Modal.info('this is a info', 'this is a title', () => {
        console.log('msg')
      })
    },
    alert () {
      this.$Modal.alert('this is a alert')
    }
  },
  created () {
  }
}
</script>

<style lang="less" scoped>
.tail_btn{
  background-color: #fff;
  color: #515a6e;
  padding: 5px 15px;
  font-size: 12px;
  border-radius: 4px;
  text-align: center;
  border: 1px solid transparent;
  border-color: @border;
  cursor: pointer;
  &:focus{
    outline:none;
  }
}
.tail_btn_info{
  color: #fff;
  background-color: @info;
  border-color: @info;
}
.tail_btn_success{
  color: #fff;
  background-color: @success;
  border-color: @success;
}
.tail_btn_warning{
  color: #fff;
  background-color: @warning;
  border-color: @warning;
}
.tail_btn_error{
  color: #fff;
  background-color: @error;
  border-color: @error;
}
</style>
