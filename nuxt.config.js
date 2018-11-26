const pkg = require('./package')

const { getConfigForKeys } = require('./lib/config.js')
const config = getConfigForKeys([
  'CTF_BLOG_POST_TYPE_ID',
  'CTF_SPACE_ID',
  'CTF_CDA_ACCESS_TOKEN'
])
const { createClient } = require('./plugins/contentful')
const client = createClient(config)

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    // title: pkg.name,
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk}｜YOKE` : `YOKE`;
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'ja_JP' },
      { property: 'og:sitename', content: pkg.name },
      { property: 'og:title', content: pkg.name, hid: 'og:title' },
      { property: 'og:description', content: pkg.description, hid: 'og:description' },
      { property: 'og:url', content: `https://www.yoketokyo.com` },
      { property: 'og:image', content: `https://www.yoketokyo.com/images/common/og_image.jpg` },
      { name: 'twitter:card', content: 'summary_large_image' },
      // { name: 'twitter:site', content: '@tomoya_otsuka' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#1c1c1c' },
  // loading: '@/components/Loading.vue',

  /*
  ** Global CSS
  */
  css: [
    '@/assets/styles/_common/reboot.scss',
    '@/assets/styles/_foundation/base.scss',
    '@/assets/styles/_foundation/layout.scss',
    '@/assets/styles/_foundation/atoms.scss',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/gtm.js',
    '~plugins/filters',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    ['@nuxtjs/google-tag-manager', {
      id: 'GTM-KPRMVNV',
      pageTracking: true
    }],
    ['nuxt-sass-resources-loader', [
      '@/assets/styles/_common/fonts.scss',
      '@/assets/styles/_common/functions.scss',
      '@/assets/styles/_common/mixin.scss',
      '@/assets/styles/_common/variables.scss',
    ]],
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config) {
      // Run ESLint on save
      if (process.server && process.browser) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: config.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: config.CTF_BLOG_POST_TYPE_ID
  },
  generate: {
    routes: function () {
      let posts = client.getEntries({
          'content_type': config.CTF_BLOG_POST_TYPE_ID
        })
        .then((entries) => {
          return entries.items.map((entry) => {
            return {
              route: '/news/' + entry.fields.slug,
              // payload: news
            }
          })
        }
      )
      return Promise.all([posts]).then(values => {
        return [...values[0]]
      })
    }
  },
}
