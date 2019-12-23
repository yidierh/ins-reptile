/**
 * @author yidier
 * @date 2019-12-23
 * @email yidierh@gmail.com
 */
export const validUrl = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('url 不能为空！'))
  }
  setTimeout(() => {
    const reg =  new RegExp(/^http:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/)
    if (!reg.test(value)) {
      return callback(new Error('请检查地址是否输入有误'))
    }
  }, 1000)
}
