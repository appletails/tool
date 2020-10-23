<template>
  <div class="amber_spin">
    <slot></slot>
    <div v-if="loading" class="amber_spin_box">
      <Loading
        :color="color"
        :msg="msg"
        class="amber_spin_loading"
      />
    </div>
  </div>
</template>

<script>
import Loading from './Loading'
export default {
  name: 'Spin',
  components: {
    Loading
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    color: {},
    msg: {}
  }
}
</script>
<style lang="less" scoped>
.amber_spin{
  display: inline-block;
  position: relative;
  .amber_spin_box{
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    position: absolute;
    z-index: 100;
    left: 0;
    top: 0;
    .amber_spin_loading{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
    }
  }
}
</style>
