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

<style rel="stylesheet/less" lang="less">
  @import "../assets/base";
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
      padding: 16px;
      min-height: 100%;
      margin-left: 180px;
      position: relative;
      z-index: 1000;
    }
  }
</style>
