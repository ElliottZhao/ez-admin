export default defineI18nConfig(() => ({
  messages: {
    'enUS': {
      layouts: {
        title: 'EZ Admin',
          signOut: 'Sign-Out',
      },
      pages: {
        title: {
          login: 'Sign-In',
          dashboard: 'Dashboard'
        },
        login: {
          signInOptions: 'Sign-In options',
          signInWithCredentials: 'Sign-In with credentials',
        }
      },
    },
    'zhCN': {
      layouts: {
        title: 'EZ 中后台',
        signOut: '登出',
      },
      pages: {
        title: {
          login: '登录',
          dashboard: '仪表盘'
        },
        login: {
          signInOptions: '登录选项',
          signInWithCredentials: '使用凭据登录',
        }
      },
    }
  }
}))
