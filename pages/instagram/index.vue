<template>
  <section :class="containerClass">
    <!-- 抓取部分 -->
    <el-form ref="insForm" :model="form" :rules="rules" :label-width="isPhone ? '' : '150px'">
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
      <el-form-item prop="proxy" label="本机是否开启代理">
        <el-switch v-model="form.proxy"></el-switch>
        <el-row class="ins-container-tips"><i class="el-icon-warning-outline"></i> 如果本机已开启代理请打开，可以加快抓取速度噢</el-row>
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
                <component :is="insData && insData.type === 'photo' ? 'photo' : 'rVideo'" :ins-data="insData"
                           :is-proxy="form.proxy"/>
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
              </div>
            </div>
          </el-form-item>
        </template>
      </transition>
    </el-form>
  </section>
</template>

<script>
  import {insComputed} from "@/mixins"
  import ins from './mixins'
  export default {
    name: "Instagram",
    mixins: [ins],
    computed: {
      ...insComputed,
      containerClass() {
        return `ins-container${this.isPhone ? '__phone' : ''}`
      }
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

    &__phone {
      padding: 24px;

      &-tips {
        margin-top: 16px;
      }
    }
  }
</style>
