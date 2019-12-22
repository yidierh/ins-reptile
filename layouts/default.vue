<template>
  <div class="app-wrapper">
    <div class="drawer-bg">
      <sidebar class="sidebar-container"/>
    </div>
    <div class="main-container">
      <nuxt />
    </div>
  </div>
</template>

<script>
  import Sidebar from './components/Sidebar'
  export default {
    components: {Sidebar}
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  .app-wrapper {
    &:after {
      content: "";
      display: table;
      clear: both;
    }
    .drawer-bg {
      width: 100%;
      top: 0;
      height: 100%;
      position: absolute;
      z-index: 999;
    }
    .sidebar-container {
      width: 180px !important;
      height: 100%;
      position: fixed;
      font-size: 0;
      top: 0;
      left: 0;
      overflow: hidden;
      z-index: 1001;
    }
    .main-container {
      padding: 0 25px;
      min-height: 100%;
      margin-left: 180px;
      position: relative;
      z-index: 1000;
    }
  }
</style>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
