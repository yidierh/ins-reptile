<template>
  <div class="ins-container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="PHOTO" name="first">PHOTO</el-tab-pane>
      <el-tab-pane label="VIDEOS" name="second">VIDEOS</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    name: "Instagram",
    data() {
      return {
        activeName: 'first'
      }
    },
    methods: {
      handleClick() {}
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  .ins-container {
  }
</style>
