export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      en: 'English',
      zh: 'Chinese',
      signInOptions: 'Sign-In options',
      signInWithCredentials: 'Sign-In with credentials',
      signOut: 'Sign-Out'
    },
    zh: {
      en: '英文',
      zh: '汉语',
      signInOptions: '登录选项',
      signInWithCredentials: '使用凭据登录',
      signOut: '登出'
    }
  }
}))
