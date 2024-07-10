// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@sidebase/nuxt-auth", "@prisma/nuxt", "@nuxtjs/i18n"],
  runtimeConfig: {
    authSecret: 'AUTH_SECRET'
  },
  auth: {
      provider: {
          type: 'authjs'
      }
  },
  i18n:{
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English'
      },
      {
        code: 'zh',
        iso: 'zh-CN',
        name: '汉语'
      }
    ],
  }
})