module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: '快速保存ins图片',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'title', content: '快速保存ins图片'},
      {name: 'description', content: '众所周知，ins 中的图片质量非常高，很多图片都是美轮美奂，看了也是爱不释手，可惜，ins 官方并没有提供下载的方法，这可怎么办呢？百度上搜索如何保存ins图片，会发现非常多...'},
      {name: 'og:title', content: '快速保存ins图片'},
      {name: 'og:description', content: '众所周知，ins 中的图片质量非常高，很多图片都是美轮美奂，看了也是爱不释手，可惜，ins 官方并没有提供下载的方法，这可怎么办呢？百度上搜索如何保存ins图片，会发现非常多...'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/axios',
    {src: '@/plugins/permission.js', ssr: false}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios'
  ],
  styleResources: {
    less: './assets/**/*.less',
    // sass: ...
  },
  // 前端中间件
  router: {
    middleware: []
  },
  // 服务端中间件
  serverMiddleware: [],
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
