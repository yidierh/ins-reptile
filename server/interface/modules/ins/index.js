/**
 * @author yidier
 * @date 2019-12-23
 * @email yidierh@gmail.com
 */
import reptile from './reptile'
const ins = {
  insPhoto: async (ctx, next) => {
    let url = ctx.request.body.url
    if (url) {
      try {
        const res = await reptile(url)
        ctx.response.body = {
          data: res,
          err_code: 200
        }
      } catch (err) {
        if (err.code === 'ECONNRESET') {
          ctx.response.body = {
            err_code: 401,
            err_message: '请检查代理端口号是否正确！'
          }
        } else if (err.code === 'PRIVATE') {
          ctx.response.body = {
            err_code: 402,
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
