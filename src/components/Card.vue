<template>
  <div class="tail_card">
    <div class="pic"></div>
    <div class="cont">
      <div class="title">未接来电</div>
      <div>喂？<br>你能听到。。。<br>我对你深深的思念么。。。</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Card',
  filters: {

  },
  data () {
    return {
    }
  },
  methods: {

  },
  created () {
  }
}
</script>

<style lang="less" scoped>
.tail_card{
  width: 400px;
  .card;
  .flex;
  margin: 40px;
  height: 400px;
  .pic{
    flex: 1;
    height: 100%;
    background-image: url('http://www.crean.top/img/card/lje/未接来电.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  .cont{
    width: 50%;
    padding: 30px;
    color:@font;
    .title{
      .title;
    }
  }
}
</style>
