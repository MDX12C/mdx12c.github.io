import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/~',
    component: () => import('@/views/Post.vue'),
  },
];

const Router = createRouter({
  routes,
  history: createWebHistory(),
});

export default Router;
