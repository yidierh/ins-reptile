import Router from 'koa-router'

const router = new Router({
  prefix: '/api'
})

router.post('/ins-photo', async (ctx, next) => {
  let url = ctx.request.body.url
  if (url) {
    ctx.body = {
      status: 200,
      success: true
    }
  } else {
    ctx.body = {
      status: 400,
      success: false,
      err_message: 'url is must be required!'
    }
  }
})

export default router
