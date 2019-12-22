<template>
  <div class="ins-container">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="PHOTO" name="first">
        <photo></photo>
      </el-tab-pane>
      <el-tab-pane label="VIDEOS" name="second">VIDEOS</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import Photo from "./components/Photo/index";
  export default {
    name: "Instagram",
    components: {Photo},
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
