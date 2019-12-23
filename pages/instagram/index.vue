<template>
  <section class="photo-container">
    <el-form ref="photoForm" :model="form" :rules="rules" label-width="80px">
      <el-form-item prop="url" required label="链接地址">
        <el-input v-model="form.url" placeholder="请输入要抓取的图片地址" clearable=""></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="getPhoto">抓取</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>

<script>
  import { validUrl } from '~/validate'
  export default {
    name: "Instagram",
    data() {
      return {
        form: {
          url: ''
        },
        rules: {
          url: [{ validator: validUrl, trigger: 'blur' }]
        }
      }
    },
    methods: {
      getPhoto() {
        this.$refs['photoForm'].validate(valid => {
          if(valid) {
            this.$axios.post('/get-ins-data', { ...this.form })
          }
        })
      }
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>

</style>
