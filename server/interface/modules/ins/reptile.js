/**
 * @author yidier
 * @date 2019-12-23
 * @email yidierh@gmail.com
 */
import api from '../../../api'

const headers = {
  'Connection': 'keep-alive',
  'Host': 'www.instagram.com',
  'Referer': 'https://www.instagram.com/instagram/',
  'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36',
  'X-Requested-With': 'XMLHttpRequest'
}

const reptile = (targetUrl) => {
  const options = {
    uri: targetUrl,
    method: "GET",
    headers: {
      'Connection': 'keep-alive',
      'Host': 'www.instagram.com',
      'Referer': 'https://www.instagram.com/instagram',
      'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36',
      'X-Requested-With': 'XMLHttpRequest'
    },
    gzip: true,
    timeout: 150000
  }
  return new Promise((resolve, reject) => {
    api(options, async (err, res) => {

      if (err) {
        reject(err)
        return false
      }

      const html = res.body
      const start = html.indexOf('window._sharedData =')
      const end = html.indexOf('<', start)
      const shareData = JSON.parse(html.substring(start + 21, end - 1))

      if (shareData['entry_data'] && !shareData['entry_data']['PostPage']) { // 私密账户
        reject({ code: 'PRIVATE', err_message: err })
        return false
      }

      const media = shareData['entry_data']['PostPage'][0]['graphql']['shortcode_media']

      // 作者信息
      const owner = {
        is_verified: media['owner']['is_verified'],
        profile_pic_url: media['owner']['profile_pic_url'],
        username: media['owner']['username']
      }

      let videoUrl = null
      let imgArr = []
      let text = ''

      if (media['edge_media_to_caption']['edges']['length']) {
        text = media['edge_media_to_caption']['edges'][0]['node']['text']
      }

      if (media['is_video']) { // 视频
        videoUrl = media['video_url']
      } else { // 图片
        if (media['edge_sidecar_to_children']) { // 多图
          const imgs = media['edge_sidecar_to_children']['edges'] // 这里要push
          imgs.forEach(item => {
            imgArr.push(item['node']['display_url'])
          })
        } else {
          imgArr.push(media['display_url'])
        }
      }
      const imgs = await transferImg(imgArr)
      resolve ({ type: media['is_video'] ? 'video' : 'photo', owner: owner, video_url: videoUrl, imgs: imgs, text: text })
    })
  })
}

const transferImg = async urls => {
  const transferImgs = []
  for(const item of urls) {
    transferImgs.push(await getBase64(item))
  }
  return transferImgs
}

const getBase64 = (url) => {
  return new Promise((resolve, reject) => {
    const options = {
      uri: url,
      method: "GET",
      headers: {
        'Host': 'scontent-nrt1-1.cdninstagram.com',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36',
        'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
        'Referer': 'scontent-nrt1-1.cdninstagram.com/v',
      },
      encoding: null, // 关闭编码
      timeout: 150000
    }
    api(options, (err, res, body) => {
      err ? reject(err) : resolve(`data:image/png;base64,${body.toString('base64')}`) // 图片转base64
    })
  })
}

export default reptile
