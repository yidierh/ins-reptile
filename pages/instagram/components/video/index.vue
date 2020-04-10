<template>
  <div @click.prevent :class="setClass('video-container')">
    <y-video :sources="video.sources" :options="video.options"></y-video>
  </div>
</template>

<script>
  import { insComputed } from '@/mixins'
  export default {
    name: "Video",
    watch: {
      insData: {
        immediate: true,
        handler(val) {
          if (val) {
            this.video.sources.push({src: val.video_url})
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
    computed: {
      ...insComputed
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
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    &__phone {
      width: 100%;
      box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    }
  }
</style>
