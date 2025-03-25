// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/fonts',
    '@nuxt/image',
    '@unocss/nuxt',
    'nuxt-twemoji',
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Axuata',
      meta: [
        { name: 'description', content: 'Axuata\'s Website. Made with Nuxt.' }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon.svg',
        },
      ],
      htmlAttrs: {
        lang: 'ja',
      },
    },
  },
  css: [
    '~/assets/styles/global.css'
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
})