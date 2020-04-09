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
  }
}
