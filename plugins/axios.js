import { Message } from 'element-ui'
export default function ({store, redirect, app: {$axios}}) {
  // 数据访问前缀
  $axios.defaults.baseURL =
    process.env.NODE_ENV === 'production' ? 'https://hidden-hamlet-88044.herokuapp.com/api/' : 'http://localhost:3000/api'

  // request拦截器，我这里设置了一个token，当然你可以不要
  $axios.onRequest(config => {

  })
  $axios.onError(error => {

  })
  // response拦截器，数据返回后，你可以先在这里进行一个简单的判断
  $axios.interceptors.response.use(
    res => {
      const _data = res.data
      if (res.status === 200) {
        switch (_data.err_code) {
          case 200:
            return _data
          case 400:
          case 401:
          case 402:
            Message.error(_data.err_message)
            throw new Error(_data)
        }
      }
    },
    error => {
      return Promise.reject(error)
    })
}
