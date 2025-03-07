// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},
  modules: ['@unocss/nuxt', 'nuxt-twemoji'],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Axuata',
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon.svg',
        },
      ],
      meta: [
        { name: 'description', content: `Axuata's website, Made by Axuata` },
        { property: 'og:title', content: 'Axuata' },
        { property: 'og:description', content: 'Axuata\'s website, Made by Axuata' },
        { property: 'og:image', content: '/favicon.svg' },
      ]
    },
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  compatibilityDate: '2025-02-19',
})