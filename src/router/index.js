import { createRouter, createWebHistory } from 'vue-router';
import Login from '../pages/Login.vue';
import Profile from '../pages/Profile.vue';
import Showcase from '../pages/Showcase.vue';
import Contact from '../pages/Contact.vue';
import Creative from '../pages/Creative.vue';

const routes = [
  { path: '/login', component: Login },
  { path: '/portfolio/profile', component: Profile },
  { path: '/portfolio/showcase', component: Showcase },
  { path: '/portfolio/contact', component: Contact },
  { path: '/portfolio/creative', component: Creative },
  { path: '/', redirect: '/login' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
