/**
 * @author yidier
 * @date 2019-12-23
 * @email yidierh@gmail.com
 */
import request from 'request'

const headers = {
  'Connection': 'keep-alive',
  'Host': 'www.instagram.com',
  'Referer': 'https://www.instagram.com/instagram/',
  'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36',
  'X-Requested-With': 'XMLHttpRequest'
}

const api = request.defaults({proxy: 'http://127.0.0.1:1080', jar: true})  // 用其他代理，记得修改代理端口

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
    timeout: 15000
  }
  api(options, function (err, res) {
    const html = res.body
    const start = html.indexOf('window._sharedData =')
    const end = html.indexOf('<', start)
    const shareData = JSON.parse(html.substring(start + 21, end - 1))
    const media = shareData['entry_data']['PostPage'][0]['graphql']['shortcode_media']

    let videoUrl = null
    let imgArr = null

    if (media['is_video']) { // 视频
      videoUrl = media['video_url']
    } else { // 图片
      if (media['edge_sidecar_to_children']) { // 多图
        imgArr = media['edge_sidecar_to_children']['edges'] // 这里要push
      } else {
        imgArr = media['display_url']
      }
    }
    console.log(videoUrl)
    console.log(imgArr)
  })
}

export default reptile
