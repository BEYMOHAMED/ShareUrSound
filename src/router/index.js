import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import UpdateMyInfo from '../views/UpdateMyInfo.vue';
import UserProfile from '../views/UserProfile.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/about',
    name: 'AboutMe',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutMe.vue'),
  },
  {
    path: '/updateme',
    name: 'UpdateMe',
    component: UpdateMyInfo,
  },
  {
    path: '/user/:id(\\d+)',
    name: 'User',
    component: UserProfile,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
