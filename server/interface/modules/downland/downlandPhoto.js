/**
 * @author yidier
 * @date 2019-12-24
 * @email yidierh@gmail.com
 */
import fs from 'fs'
import api from '../../../api'
import Bagpipe from 'bagpipe'

const dowlandPic = (src, dest) => {
  api(src).pipe(fs.createWriteStream(dest)).on('close', () => {
    console.log('pic saved!')
  })
}

const downlandPhoto = (imgList) => {

  const bagpipe = new Bagpipe(10)
  imgList.forEach(item => {
    bagpipe.push(dowlandPic, item, './downlands/' + new Date().getTime() + '.jpg', function (err, data) {
      console.log(err)
    })
  })
}

export default downlandPhoto
