<template>
  <div @click.prevent class="video-container">
    <no-ssr>
      <my-video :sources="video.sources" :options="video.options"></my-video>
    </no-ssr>
  </div>
</template>

<script>
  let myVideo = {}
  if(process.browser) {
    myVideo = require('vue-video')
  }
  export default {
    name: "Video",
    components: { 'my-video': myVideo },
    watch: {
      insData: {
        immediate: true,
        handler(val) {
          if (val) {
            this.video.sources.push({ src: val.video_url })
          }
        }
      }
    },
    props: {
      insData: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        video: {
          sources: [],
          options: {
            autoplay: true
          }
        }
      }
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  .video-container {
    width: 375px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }
</style>
