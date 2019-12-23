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
      reptile(url)
      ctx.body = {
        status: 200,
        success: true
      }
    } else {
      ctx.body = {
        status: 400,
        success: false,
        err_message: 'url is must be required!'
      }
    }
  }
}

export default ins
