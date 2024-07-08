// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@sidebase/nuxt-auth", "@prisma/nuxt"],
  runtimeConfig: {
    authSecret: 'AUTH_SECRET'
  },
  auth: {
      provider: {
          type: 'authjs'
      }
  },
  prisma: {
    autoSetupPrisma: false,
  }
})