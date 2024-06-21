// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Cuaca from '../pages/Cuaca.vue';

const routes = [
  {
    path: '/cuaca',
    name: 'Cuaca',
    component: Cuaca
  }
  // Tambahkan rute lainnya jika diperlukan
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
