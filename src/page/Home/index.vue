<template>
  <div>
    <button @click="info()">info</button>
    <button @click="alert()">alert</button>
    <button @click="confirm()">confirm</button>
    <button @click="$Modal.remove()">close</button>
  </div>
</template>

<script>
import { cent, datetamp, timestamp } from '@/filters'
export default {
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

</style>
