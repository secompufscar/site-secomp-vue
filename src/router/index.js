import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Events from '@/views/Events.vue';
import About from '@/views/About.vue';
import Staff from '@/views/Staff.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/events',
    name: 'Events',
    component: Events,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/staff',
    name: 'Staff',
    component: Staff,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
