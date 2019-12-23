/**
 * @author yidier
 * @date 2019-12-23
 * @email yidierh@gmail.com
 */
export const validUrl = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('url 不能为空！'))
  }
  if (value) {
    const reg = new RegExp(/(ht|f)tp(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*)?/)
    if (!reg.test(value)) {
      return callback(new Error('请检查地址是否输入有误'))
    } else {
      callback()
    }
  }
}
