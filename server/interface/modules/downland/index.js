/**
 * @author yidier
 * @date 2019-12-24
 * @email yidierh@gmail.com
 */
const downland = {
  img: async ctx => {
    const type = ctx.request.body.type
    if (type === 'photo') {
      const imgs = ctx.request.body.data
      console.log(imgs)
    } else {

    }
  }
}

export default downland
