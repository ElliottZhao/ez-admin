export default defineI18nConfig(() => ({
  messages: {
    enUS: {
      layouts: {
        title: 'EZ Admin',
        signOut: 'Sign-Out',
        welcome: 'Welcome, {name}!',
      },
      pages: {
        title: {
          login: 'Sign-In',
          dashboard: 'Dashboard',
        },
        signIn: {
          signInWithCredentials: 'Sign-In with username and password',
          username: {
            label: 'username',
            required: 'username is required'
          },
          password: {
            label: 'password',
            required: 'password is required'
          },
        },
      },
    },
    zhCN: {
      layouts: {
        title: 'EZ 中后台',
        signOut: '登出',
        welcome: '欢迎，{name}！',
      },
      pages: {
        title: {
          login: '登录',
          dashboard: '仪表盘',
        },
        signIn: {
          signInWithCredentials: '使用用户名和密码登录',
          username: {
            label: '用户名',
            required: '请输入用户名'
          },
          password: {
            label: '密码',
            required: '请输入密码'
          },
        },
      },
    },
  },
}));
