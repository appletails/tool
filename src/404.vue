<template>
  <div class="not">
    <div class="box">
      <img src="@/assets/img/404.png" alt>
      <p>亲~你访问的页面好像不存在哦~</p>
      <Button @click="$router.push('/')">返回首页</Button>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.not {
  position: fixed;
  height: 100%;
  width: 100%;
  .box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-55%);
    width: 100%;
    text-align: center;
    img {
      width: 2rem;
      position: relative;
      left: -6%;
      opacity: 0.8;
    }
    p {
      font-size: .14rem;
      margin-top: .2rem;
    }
    button {
      margin-top: .2rem;
      width: 1.5rem;
      line-height: .35rem;
      border-radius: .08rem;
      background-color: #3cc6ed;
      border: 1px solid #30a2e4;
      color: #fff;
      &:focus{
          outline: none;
      }
    }
  }
}
</style>
