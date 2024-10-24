// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [ "@/assets/styles/global.scss" ],
  modules: [ "@nuxtjs/google-fonts" ],
  googleFonts: {
    families: {
      'Noto+Sans+JP': '200..900',
    },
    display: 'swap',
  },
  app: {
    head: {
      title: "Axuata",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/assets/images/axuata/axuata.png" },
      ],
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler"
        }
      }
    }
  },
  components: {
    dirs: [
      {
        path: '~/components',
        extensions: ['vue'],
        pathPrefix: false,
        level: 3,
      },
    ],
  },
})