<template>
  <div class="amber_loading_main_box">
    <svg class="amber_loading_icon" :fill="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.71 9.12">
      <circle cx="4.16" cy="1" r="1" />
      <circle cx="4.16" cy="8.5" r="0.62" />
      <circle cx="1.51" cy="2.1" r="0.3" />
      <circle cx="6.81" cy="7.4" r="0.71" />
      <circle cx="0.41" cy="4.75" r="0.41" />
      <circle cx="7.91" cy="4.75" r="0.8" />
      <circle cx="1.51" cy="7.4" r="0.51" />
      <circle cx="6.81" cy="2.1" r="0.9" />
    </svg>
    <div class="amber_loading_msg" v-if="msg" :style="{ color }">{{ msg }}</div>
  </div>
</template>
<script>
export default {
  name: "Loading",
  props: {
    color: {
      type: String,
      default: "#fff"
    },
    msg: {
      type: String,
      default: ""
    }
  }
};
</script>
<style lang="less" scoped>
.amber_loading_main_box{
  text-align: center;
  .amber_loading_msg{
    margin-top: .05rem;
    font-size: .14rem;
  }
}
.amber_loading_icon{
  width: .25rem;
  min-width: 25px;
  animation: dash 2s linear infinite;
}
@keyframes dash {
  0%{
    transform: rotate(0deg)
  }
  100%{
    transform: rotate(360deg)
  }
}
</style>
