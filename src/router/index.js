import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import PageNotFound from '../views/PageNotFound.vue';
import Covid from '../views/Covid.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '*',
    component: PageNotFound
  },
  {
    path: '/covid19',
    name: 'Covid',
    component: Covid
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
