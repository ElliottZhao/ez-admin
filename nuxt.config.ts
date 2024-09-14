// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@vueuse/nuxt', '@nuxtjs/i18n', '@ant-design-vue/nuxt'],
  i18n: {
    vueI18n: './i18n.config.ts'
  },
  antd: {
  }
})