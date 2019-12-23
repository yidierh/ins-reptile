<template>
  <div class="photo-container">
    <div class="photo-container-img">
      <el-image
        style="width: 100%; min-height: 200px; background: #C0C4CC;"
        :src="insData && insData.imgs ? insData.imgs[0]: ''"
        :preview-src-list="insData && insData.imgs ? insData.imgs: []"
        lazy></el-image>
    </div>
    <el-alert
      :title="`点击可预览大图 / 总共 ${insData.imgs.length ? insData.imgs.length : 0} 张图片`"
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
    &-img {
      .el-image {
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
      }
    }
  }
</style>
