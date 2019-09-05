<template>
  <div id="app">
    <router-view/>
    <Modal />
  </div>
</template>

<script>
export default {
  name: 'App',
  beforeUpdate () {
    this.$Modal.remove()
  }
}
</script>

<style lang="less">
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 16px;
}
html{
  min-height: 100vh;
  min-width: 100vw;
  background-color: @bgColor;
}

</style>
