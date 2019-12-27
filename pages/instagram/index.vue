<template>
  <section class="ins-container">
    <!-- 抓取部分 -->
    <el-form ref="insForm" :model="form" :rules="rules" label-width="80px">
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
            <div class="ins-container-content">
              <div class="ins-container-content-data">
                <component :is="insData && insData.type === 'photo' ? 'photo' : 'rVideo'" :ins-data="insData"/>
              </div>
              <div class="ins-container-content-owner">
                <div class="ins-container-content-owner-avatar">
                  <el-avatar :src="insData && insData.owner ? insData.owner.profile_pic_url : ''"></el-avatar>
                </div>
                <div class="ins-container-content-owner-author">
                  <el-alert
                    :title="`作者：${insData && insData.owner ? insData.owner.username: ''}`"
                    type="info"
                    :closable="false">
                  </el-alert>
                </div>
                <div class="ins-container-content-owner-text" v-if="insData && insData.text">
                  <el-alert
                    :title="insData.text"
                    type="info"
                    :closable="false">
                  </el-alert>
                </div>
                <!--<div class="ins-container-content-owner-btn">
                  <el-button :loading="btnLoading" type="success" @click="downland(insData.type)">下载资源 <i class="el-icon-download el-icon&#45;&#45;right"></i></el-button>
                </div>-->
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
        insData: {},
        btnLoading: false
      }
    },
    methods: {
      getPhoto() {
        this.$refs['insForm'].validate(valid => {
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
      },
      downland(type) {
        if (type === 'photo') { // 图片下载
          // this.btnLoading = true
          this.$message.warning('鼠标右键点图片下载即可')
          // this.$axios.post('/downland', { type: type, data: this.insData.imgs }).then(() => {
          //   this.$message.success('下载成功，请到根目录下的 downlands 文件夹中查看')
          //   this.btnLoading = false
          // }).catch(()=> {
          //   this.btnLoading = true
          // })
        } else { // 视频下载
          this.btnLoading = true
          this.$message.warning('即将为您跳转至下载页，点击视频右下角下载即可')
          setTimeout(()=>{
            this.btnLoading = false
            window.open(`${this.insData.video_url}`, '_blank')
          }, 2000)
        }
      }
    }
  }
</script>

<style rel="stylesheet/less" lang="less">
  .ins-container {
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
        &-author {}
        &-text, &-btn {
          margin-top: 15px;
        }
      }
    }
  }
</style>
