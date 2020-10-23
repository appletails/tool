<template>
  <div id="app">
    <router-view/>
    <Modal />
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    window.addEventListener('resize', () => {
      this.$store.commit('CHANGEDCW')
    })
  },
  beforeUpdate () {
    this.$Modal.remove()
  }
}
</script>

