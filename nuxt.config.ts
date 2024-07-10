import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    "@sidebase/nuxt-auth",
    "@prisma/nuxt",
    "@nuxtjs/i18n",
    "nuxtjs-naive-ui",
    '@nuxtjs/tailwindcss'
  ],
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
        code: 'enUS',
        iso: 'en-US',
        name: 'English'
      },
      {
        code: 'zhCN',
        iso: 'zh-CN',
        name: '汉语'
      }
    ],
  },
  vite: {
    plugins: [
      AutoImport({
        imports: [
          {
            'naive-ui': [
              'useDialog',
              'useMessage',
              'useNotification',
              'useLoadingBar'
            ]
          }
        ]
      }),
      Components({
        resolvers: [NaiveUiResolver()]
      })
    ]
  }
})