<template>
  <div>
    <Button />
    <Spin loading color="yellow" msg="123456">
      <div class="spin">
        test
      </div>
    </Spin>
    <Chart />
    <input type="text" placeholder="样式美化"/>
  </div>
</template>

<script>
import Button from "@/components/Button"
import Spin from "@/components/Spin"
import Chart from "./Chart"
import { getLoveSay } from '@/common/api'
export default {
  components: {
    Button,
    Spin,
    Chart
  },
  created() {
    getLoveSay()
      .then(res => {
        this.$Modal.alert('请求成功')
      })
      .catch(e => {
        this.$Modal.alert('请求失败')
      })
  }
};
</script>

<style lang="less" scoped>
.spin{
  width: 1rem;
  height: 1rem;
  text-align: center;
  line-height: 1rem;
}
</style>
