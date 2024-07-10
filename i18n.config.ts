export default defineI18nConfig(() => ({
  messages: {
    'en-us': {
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
    'zh-cn': {
      layouts: {
        title: 'EZ 中后台',
        signOut: '登出',
      },
      pages: {
        title: {
          home: 'Home page'
        },
        login: {
          signInOptions: '登录选项',
          signInWithCredentials: '使用凭据登录',
        }
      },
    }
  }
}))
