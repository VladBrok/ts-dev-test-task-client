import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('pages/RegisterPage.vue'),
  },
  {
    path: '/log-in',
    component: () => import('pages/LogInPage.vue'),
  },
  {
    path: '/profile',
    component: () => import('pages/ProfilePage.vue'),
  },
  {
    path: '/profile/edit',
    component: () => import('pages/ProfileEditPage.vue'),
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
