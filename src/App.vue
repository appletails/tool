<template>
  <div id="app">
    <router-view/>
    <Modal />
  </div>
</template>

<script>
import Modal from '@/components/Modal'
export default {
  name: 'App',
  components: {
    Modal
  },
  beforeUpdate () {
    this.$Modal.remove()
  }
}
</script>

<style>
</style>
