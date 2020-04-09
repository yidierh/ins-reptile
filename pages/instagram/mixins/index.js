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
          const loading = this.$loading({
            lock: true,
            text: `${this.form.proxy ? '抓取中...' : '本机未开启代理，抓取时间可能较长，请耐心等待...'}`,
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
        this.$message.warning('目前仅支持点击右键下载，后续会优化~')
        // this.$axios.post('/downland', { type: type, data: this.insData.imgs }).then(() => {
        //   this.$message.success('下载成功，请到根目录下的 downlands 文件夹中查看')
        //   this.btnLoading = false
        // }).catch(()=> {
        //   this.btnLoading = true
        // })
      } else { // 视频下载
        this.btnLoading = true
        this.$message.warning('即将为您跳转至下载页，点击视频右下角下载即可')
        setTimeout(() => {
          this.btnLoading = false
          window.open(`${this.insData.video_url}`, '_blank')
        }, 2000)
      }
    }
  }
}

export default ins
