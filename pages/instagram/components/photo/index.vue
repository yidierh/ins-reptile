<template>
  <div :class="setClass('photo-container')">
    <div class="photo-container-img">
      <el-image
        style="width: 100%; min-height: 200px; background: #C0C4CC;"
        :src="insData && insData.imgs ? insData.imgs[0]: ''"
        :preview-src-list="insData && insData.imgs ? insData.imgs: []"
        lazy></el-image>
    </div>
    <el-alert
      :title="`点击可预览大图 / 总共 ${insData.imgs.length ? insData.imgs.length : 0} 张图片`"
      type="warning"
      :closable="false">
    </el-alert>
    <el-row v-show="isProxy" :class="setClass('photo-container-tips')"><i class="el-icon-warning-outline"></i> 如果图片无法显示，请关闭
      “本机是否开启代理”
    </el-row>
  </div>
</template>

<script>
  import { insComputed } from '@/mixins'
  export default {
    name: "Photo",
    props: {
      insData: {
        type: Object,
        default() {
          return {}
        }
      },
      isProxy: {
        type: Boolean,
        required: true
      }
    },
    computed: {
      ...insComputed
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  .photo-container {
    padding: 0;
    width: 375px;

    &__phone {
      padding: 0;
      width: 100%;
      &-img {
        .el-image {
          border-radius: 5px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
        }
      }
      &-tips {
        margin-bottom: 10px;
        color: rgb(240, 68, 54);
      }
    }

    &-tips {
      margin-bottom: 10px;
      color: rgb(240, 68, 54);
    }

    &-img {
      .el-image {
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
      }
    }
  }
</style>
