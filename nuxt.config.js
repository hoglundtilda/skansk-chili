export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'skansk chili',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },

  components: true,
  target: 'static',

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // API on server or locally
    baseUrl: process.env.BASE_URL || 'http://localhost:5000',
  },

  env: {
    // env fallback axios
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  buildModules: ['@nuxtjs/google-fonts'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],

  googleFonts: {
    download: true,
    display: 'swap',
    families: {
      Montserrat: {
        wght: [100, 200, 300, 400, 600, 700, 900],
        ital: [100, 300, 400, 500, 700],
      },
    },
  },

  css: ['~assets/css/main.scss'],

  plugins: [],

  styleResources: {
    scss: ['~assets/css/*.scss'],
  },
}
