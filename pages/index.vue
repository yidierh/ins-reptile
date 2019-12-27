<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        INS-REPTILE
      </h1>
      <h2 class="subtitle">
        Instagram 照片视频抓取工具
      </h2>

      <div class="pay-container">
        <h3 class="pay-container-title">喜欢的话，打赏一下吧</h3>
        <div class="pay-container-img">
          <img width="200px" src="@/assets/pay.jpg">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Logo from '~/components/Logo.vue'

  export default {
    components: {
      Logo
    }
  }
</script>

<style rel="stylesheet/less" lang="less">
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .pay-container {
    position: fixed;
    top: 30vh;
    right: 30px;
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
