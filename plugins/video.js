/**
 * @author yidier
 * @date 2019-12-28
 * @email yidierh@gmail.com
 */
import Vue from 'vue'
import video from 'vue-video'

const YVideo = {

  install: function(Vue){

    Vue.component('YVideo', video)

  }

}

Vue.use(YVideo)
