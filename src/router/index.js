// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Login from '../pages/Login.vue';
import Profile from '../pages/Profile.vue';
import Showcase from '../pages/Showcase.vue';
import Contact from '../pages/Contact.vue';
import Creative from '../pages/Creative.vue';

let isAuthenticated = false;

export function setAuthenticated(value) {
  isAuthenticated = value;
}

export function logout() {
  isAuthenticated = false;
}

const routes = [
  { path: '/login', component: Login },
  { path: '/portfolio/profile', component: Profile, meta: { requiresAuth: true } },
  { path: '/portfolio/showcase', component: Showcase, meta: { requiresAuth: true } },
  { path: '/portfolio/contact', component: Contact, meta: { requiresAuth: true } },
  { path: '/portfolio/creative', component: Creative, meta: { requiresAuth: true } },
  { path: '/', redirect: '/login' }
];

const router = createRouter({
  history: createWebHistory('/Vue.js-Portfolio/'),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login');
  } else if (to.path === '/login' && isAuthenticated) {
    next('/portfolio/profile');
  } else {
    next();
  }
});

export default router;
