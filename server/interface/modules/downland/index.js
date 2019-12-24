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
      await downlandPhoto(imgs)
    } else {

    }
  }
}

export default downland
