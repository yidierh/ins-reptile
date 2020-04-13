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

      this.download.show = true

      const dl = download(url)

      if (type === 'photo') {
        // console.log(dl)
        if (this.download.times !== length) {
          this.download.times++
          // console.log(`times`, this.download.times)
          // console.log(`length`, length)
          // console.log(`percent`, this.download.percent)
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
      // let type = 'photo'
      if (type === 'photo') {
        // let imgs = ['//bpic.588ku.com/art_water_pic/19/12/31/6d90273d35dc92788169990c809e315f.jpg', '//bpic.588ku.com/art_water_pic/19/12/31/3a6321c0cf64e71124cc478ebb17d211.jpg', '']
        for (let items of imgs) {
          console.log(items)
          this.downloadFile(items, 'photo', imgs.length)
        }
      } else {
        // let video_url = 'https://scontent-iad3-1.cdninstagram.com/v/t50.16885-16/10000000_2083507971760567_1928816744017690624_n.mp4?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=bbhXBkqEMXUAX_lBGAr&oe=5E962D5B&oh=0633a13471b335918e9cc32726462047'
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
