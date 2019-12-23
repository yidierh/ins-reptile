<template>
  <div class="photo-container">
    <el-image
      style="width: 100%;"
      :src="insData && insData.imgs ? insData.imgs[0]: ''"
      :preview-src-list="insData && insData.imgs ? insData.imgs: []">
      <div slot="placeholder" class="image-slot">
        加载中<span class="dot">...</span>
      </div>
    </el-image>
    <el-alert
      title="点击可预览大图"
      type="success"
      :closable="false">
    </el-alert>
  </div>
</template>

<script>
  export default {
    name: "Photo",
    props: {
      insData: {
        type: Object,
        default () {
          return {}
        }
      }
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  .photo-container {
    padding: 0;
    width: 375px;
  }
</style>
