/**
 * @author yidier
 * @date 2019-12-24
 * @email yidierh@gmail.com
 */
import request from 'request'
import server from '../config'

let options = {}

if (process.env.NODE_ENV !== 'production') {
  options = {
    proxy: `http://127.0.0.1:${server.port}`,
    jar: true
  }
} else {
  options = {
    jar: true
  }
}

const api = request.defaults(options)  // 用其他代理，记得修改代理端口

export default api
