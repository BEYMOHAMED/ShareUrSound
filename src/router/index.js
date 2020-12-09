import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import UpdateMyInfo from '../views/UpdateMyInfo.vue';
import UserProfile from '../views/UserProfile.vue';
import UserFollowers from '../views/UserFollowers.vue';
import UserFollows from '../views/UserFollows.vue';
import MyFollows from '../views/MyFollows.vue';
import MyFollowers from '../views/MyFollowers.vue';
import AddMedia from '../views/AddMedia.vue';
import Medium from '../views/Medium.vue';

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
  {
    path: '/user/:id(\\d+)/followers',
    name: 'UserFollowers',
    component: UserFollowers,
  },
  {
    path: '/user/:id(\\d+)/follow',
    name: 'UserFollows',
    component: UserFollows,
  },
  {
    path: '/user/followers',
    name: 'MyFollowers',
    component: MyFollowers,
  },
  {
    path: '/user/follow',
    name: 'MyFollows',
    component: MyFollows,
  },
  {
    path: '/media/add',
    name: 'AddMedia',
    component: AddMedia,
  },
  {
    path: '/media/:id(\\d+)',
    name: 'Medium',
    component: Medium,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
