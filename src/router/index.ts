import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '@/layouts/default.vue';
import Home from '@/pages/index.vue';
import Login from '@/pages/login.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          component: Home,
          meta: {
            title: '首页',
            inMenu: true,
          },
        },
      ],
    },
    {
      path: '/login',
      component: Login,
      meta: {
        title: '登录',
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title as string;
  }
  next();
});

export default router;
