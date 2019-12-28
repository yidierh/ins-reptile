/**
 * @author yidier
 * @date 2019-12-23
 * @email yidierh@gmail.com
 */
import reptile from './reptile'
const ins = {
  insPhoto: async ctx => {
    const { url, proxy } = ctx.request.body
    if (url) {
      if (url.indexOf('www.instagram.com') < 0) {
        ctx.response.body = {
          err_code: 400,
          err_message: '请检查该链接是否为 instagram 链接！'
        }
        return false
      }
      try {
        const res = await reptile(url, proxy)
        ctx.response.body = {
          data: res,
          err_code: 200
        }
      } catch (err) {
        if (err.code === 'ECONNRESET') {
          ctx.response.body = {
            err_code: 400,
            err_message: '请确认代理端已经开启'
          }
        } else if (err.code === 'PRIVATE') {
          ctx.response.body = {
            err_code: 400,
            err_message: '暂时无法抓取私密账户数据！'
          }
        }
      }
    }
     else {
      ctx.response.body = {
        err_code: 400,
        err_message: 'url is must be required!'
      }
    }
  }
}

export default ins
