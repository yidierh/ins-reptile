<template>
  <div class="pay-container">
    <h3 class="pay-container-title">喜欢的话，打赏一下吧</h3>
    <div class="pay-container-img">
      <img width="200px" src="@/assets/pay.jpg">
    </div>
  </div>
</template>

<script>
  export default {
    name: "pay"
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  .pay-container {
    position: fixed;
    top: 30vh;
    right: 30px;
    z-index: 999;
    &-title {
      font-weight: bold;
      width: 100%;
      color: #333;
      word-spacing: 5px;
      line-height: 40px;
    }

    &-img {
      width: 100px;
    }
  }
</style>
