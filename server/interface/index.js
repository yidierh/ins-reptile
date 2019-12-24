/**
 * @author yidier
 * @date 2019-12-23
 * @email yidierh@gmail.com
 */
import Router from 'koa-router'

// modules
import ins from './modules/ins'
import downland from './modules/downland'

const router = new Router({
  prefix: '/api',
})

// ins
router.post('/get-ins-data', ins.insPhoto)

// downland
router.post('/downland', downland.img)

export default router
