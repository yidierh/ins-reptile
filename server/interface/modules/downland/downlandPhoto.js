/**
 * @author yidier
 * @date 2019-12-24
 * @email yidierh@gmail.com
 */
import fs from 'fs'
import api from '../../../api'
import Bagpipe from 'bagpipe'

const downlandPhoto = (imgList) => {

  const maxLength =  imgList.length
  let times = 1

  return new Promise((resolve, reject) => {
    const downlandPic = (src, dest) => {
      api(src).pipe(fs.createWriteStream(dest)).on('close', () => {
        if (times < maxLength) {
          ++times
        } else {
          resolve('pic saved!')
        }
      })
    }

    const bagpipe = new Bagpipe(10)

    imgList.forEach(item => {
      bagpipe.push(downlandPic, item, './downlands/' + new Date().getTime() + '.jpg', function (err, data) {
        reject(err)
      })
    })
  })

}

export default downlandPhoto
