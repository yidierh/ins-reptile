/**
 * @author yidier
 * @date 2020-04-09
 * @email yidierh@gmail.com
 */
export const insComputed = {
  isPhone() {
    if (typeof window !== 'undefined') {
      return /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)
    }
    return false
  },
  setClass() {
    let that = this
    return function(className) {
      let end = className.indexOf('container') + 9
      let phoneClass = `${className.slice(0, end)}__phone-${className.slice(end + 1)}`
      return that.isPhone ? `${phoneClass}` : className
    }
  }
}
