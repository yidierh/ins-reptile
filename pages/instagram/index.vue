<template>
  <section class="photo-container">
    <!-- 抓取部分 -->
    <el-form ref="photoForm" :model="form" :rules="rules" label-width="80px">
      <el-form-item prop="url" required label="链接地址">
        <el-input v-model="form.url" placeholder="请输入要抓取的图片地址" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-alert
          title="使用方法：instagram 里面点分享复制链接，然后将链接粘贴到输入框中"
          type="warning"
          :closable="false">
        </el-alert>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="getPhoto">抓取</el-button>
      </el-form-item>
      <!-- 抓取的内容 -->
      <transition name="fade">
        <el-divider v-if="insData.type"><i class="el-icon-sunrise"></i> 抓取结果</el-divider>
      </transition>
      <transition name="fade">
        <template v-if="insData.type">
          <el-form-item>
            <div class="photo-container-content">
              <div class="photo-container-content-data">
                <component :is="insData && insData.type === 'photo' ? 'photo' : 'rVideo'" :ins-data="insData"/>
              </div>
              <div class="photo-container-content-owner">
                <div class="photo-container-content-owner-avatar">
                  <el-avatar :src="insData && insData.onwer ? insData.onwer.profile_pic_url : ''"></el-avatar>
                </div>
                <div class="photo-container-content-owner-author">
                  <el-alert
                    :title="`作者：${insData && insData.onwer ? insData.onwer.username: ''}`"
                    type="info"
                    :closable="false">
                  </el-alert>
                </div>
                <div class="photo-container-content-owner-text" v-if="insData && insData.text">
                  <el-alert
                    :title="insData.text"
                    type="info"
                    :closable="false">
                  </el-alert>
                </div>
              </div>
            </div>
          </el-form-item>
        </template>
      </transition>
    </el-form>
  </section>
</template>

<script>
  import {validUrl} from '~/validate'
  import photo from './components/photo'
  import rVideo from './components/video'

  export default {
    name: "Instagram",
    components: {photo, rVideo},
    data() {
      return {
        form: {
          url: ''
        },
        rules: {
          url: [{validator: validUrl, trigger: 'blur'}]
        },
        insData: {}
      }
    },
    methods: {
      getPhoto() {
        this.$refs['photoForm'].validate(valid => {
          if (valid) {
            const loading = this.$loading({
              lock: true,
              text: '抓取中...',
              spinner: 'el-icon-loading',
              background: 'rgba(0, 0, 0, 0.7)'
            })
            this.$axios.post('/get-ins-data', {...this.form})
              .then(res => {
                this.insData = {...res.data}
                loading.close()
              })
              .catch(() => {
                loading.close()
              })
          }
        })
      }
    }
  }
</script>

<style rel="stylesheet/less" lang="less">
  .photo-container {
    &-content {
      display: inline-flex;

      &-data {
        flex: 1;
      }

      &-owner {
        margin-left: 16px;

        &-avatar {
          .el-avatar {
            box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
          }
        }
        &-author {}
        &-text {
          margin-top: 15px;
        }
      }
    }
  }
</style>
