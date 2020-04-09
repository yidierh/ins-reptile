<template>
  <component :is=" !isPhone ? 'PC' : 'Phone' "></component>
</template>

<script>
  import {insComputed} from "@/mixins"
  import PC from './pc'
  import Phone from './phone'
  export default {
    name: "Instagram",
    components: { PC, Phone },
    computed: {
      ...insComputed
    }
  }
</script>

<style rel="stylesheet/less" lang="less">
  .ins-container {

    &-tips {
      color: rgb(184, 184, 184);
    }

    &-content {
      display: inline-flex;
      width: 100%;

      &-data {
        flex: 1;
      }

      &-owner {
        margin-left: 16px;
        width: 100%;

        &-avatar {
          .el-avatar {
            box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
          }
        }

        &-author {
        }

        &-text, &-btn {
          margin-top: 15px;
        }
      }
    }
  }
</style>
