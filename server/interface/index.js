/**
 * @author yidier
 * @date 2019-12-23
 * @email yidierh@gmail.com
 */
import Router from 'koa-router'

// modules
import ins from './modules/ins'

const router = new Router({
  prefix: '/api',
})

router.post('/get-ins-data', ins.insPhoto)

export default router
