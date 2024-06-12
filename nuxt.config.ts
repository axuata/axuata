// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/styles/global.scss'
  ],
  modules: [ '@nuxt/image'],
  app:{
    head: {
      title: "Axuata",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/axuata.svg" },
        { rel: "stylesheet", href: "https://unpkg.com/modern-css-reset/dist/reset.min.css" },
      ],
      script: [
        { src: "https://kit.fontawesome.com/e48ae4e274.js", crossorigin: "anonymous"},
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  components: [{
    path: '~/components/',
    pathPrefix: false,
  }]
})
