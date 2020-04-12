/**
 * @author yidier
 * @date 2020-04-09
 * @email yidierh@gmail.com
 */
import {validUrl} from '~/validate'
import photo from '../components/photo'
import rVideo from '../components/video'
const ins = {
  components: {photo, rVideo},
  head() {
    return {
      title: 'Instagram',
      script: [{ src: '/js/download.js' }]
    }
  },
  data() {
    return {
      form: {
        url: '',
        proxy: false
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
          this.form.url = this.removeParams()
          const loading = this.$loading({
            lock: true,
            text: `${this.form.proxy ? '抓取中...' : '本机未开启代理，抓取时间可能较长，请耐心等待...'}`,
            spinner: 'el-icon-loading',
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
    downlandCallBack() {
      const { imgs, video_url, type } = this.insData
      if (type === 'photo') { // 图片下载
        imgs.forEach(item => {
          download(item)
        })
      } else { // 视频下载
        download(video_url)
      }
    },
    removeParams() {
      let _url = this.form.url
      let _end = this.form.url.indexOf('?')
      let _newUrl = _url.slice(0, _end)
      return _newUrl
    },
    urlChangeHandler() {
      this.insData = {}
    }
  }
}

export default ins
