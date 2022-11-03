import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
  },
];

const Router = createRouter({
  routes,
  history: createWebHistory(),
});

export default Router;
