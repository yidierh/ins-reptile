/**
 * @author yidier
 * @date 2019-12-24
 * @email yidierh@gmail.com
 */
import downlandPhoto from './downlandPhoto'

const downland = {
  img: async ctx => {
    const type = ctx.request.body.type
    if (type === 'photo') {
      const imgs = ctx.request.body.data
      try {
        await downlandPhoto(imgs)
        ctx.response.body = {
          success: true,
          err_code: 200
        }
      } catch (err) {
        ctx.response.body = {
          err_code: 400,
          err_message: '下载过程出错，请稍后再试！'
        }
      }
    } else {

    }
  }
}

export default downland
