export default defineI18nConfig(() => ({
  messages: {
    'en': {
      layouts: {
        title: 'EZ Admin',
          signOut: 'Sign-Out',
      },
      pages: {
        title: {
          home: 'Home page'
        },
        login: {
          signInOptions: 'Sign-In options',
          signInWithCredentials: 'Sign-In with credentials',
        }
      },
    },
    'zh': {
      layouts: {
        title: 'EZ 中后台',
        signOut: '登出',
      },
      pages: {
        title: {
          home: '首页'
        },
        login: {
          signInOptions: '登录选项',
          signInWithCredentials: '使用凭据登录',
        }
      },
    }
  }
}))
