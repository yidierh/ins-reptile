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
      const res = await reptile(url)
      ctx.response.body = {
        data: res,
        err_code: 200
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
