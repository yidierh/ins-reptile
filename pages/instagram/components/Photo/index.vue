<template>
  <section class="photo-container">
    <el-form ref="photoForm" :model="form" label-width="80px">
      <el-form-item required label="链接地址">
        <el-input v-model="form.url" placeholder="请输入要抓取的图片地址" clearable=""></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="getPhoto">抓取</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>

<script>
  export default {
    name: "Photo",
    data() {
      return {
        form: {
          url: ''
        }
      }
    },
    methods: {
      getPhoto() {
        this.$axios.post('/ins-photo', { ...this.form })
      }
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>

</style>
