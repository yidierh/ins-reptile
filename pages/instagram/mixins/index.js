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
      script: [{src: '/js/download.js'}]
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
      btnLoading: false,
      download: {
        percent: 0,
        status: null,
        show: false,
        total: 0,
        loaded: 0,
        times: 0
      }
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
    downloadFile(url, type, length) {

      this.download.status = null
      this.download.show = true

      const dl = download(url)

      if (type === 'photo') {
        if (this.download.times !== length) {
          this.download.times++
          this.download.percent = Math.round(this.download.times / length * 100)
          if (this.download.times === length) {
            this.downloadFinished()
          }
        }
      } else { // video
        dl.onprogress = (event) => {
          this.download.percent = Math.round(event.loaded / event.total * 100)
        }
        dl.addEventListener('readystatechange', ({currentTarget}) => {
          if (currentTarget.readyState === 4) {
            this.downloadFinished()
          }
        })
      }
    },
    downloadFinished() {
      this.download.status = 'success'
      this.download.show = false
      this.download.percent = 0
      this.download.times = 0
    },
    downlandCallBack() {
      const { imgs, video_url, type } = this.insData
      if (type === 'photo') {
        for (let items of imgs) {
          this.downloadFile(items, 'photo', imgs.length)
        }
      } else {
        if (this.isPhone) {
          this.$message.warning('手机暂不支持下载视频，请使用电脑打开下载')
          return false
        }
        this.downloadFile(video_url)
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
