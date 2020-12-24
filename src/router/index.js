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
    path: '/home',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      if (sessionStorage.getItem('token')) {
        next();
      } else {
        next({ name: 'Login' });
      }
    },
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
    beforeEnter: (to, from, next) => {
      if (sessionStorage.getItem('token')) {
        next();
      } else {
        next({ name: 'Login' });
      }
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutMe.vue'),
  },
  {
    path: '/updateme',
    name: 'UpdateMe',
    component: UpdateMyInfo,
    beforeEnter: (to, from, next) => {
      if (sessionStorage.getItem('token')) {
        next();
      } else {
        next({ name: 'Login' });
      }
    },
  },
  {
    path: '/user/:id(\\d+)',
    name: 'User',
    component: UserProfile,
    beforeEnter: (to, from, next) => {
      if (sessionStorage.getItem('token')) {
        next();
      } else {
        next({ name: 'Login' });
      }
    },
  },
  {
    path: '/user/:id(\\d+)/followers',
    name: 'UserFollowers',
    component: UserFollowers,
    beforeEnter: (to, from, next) => {
      if (sessionStorage.getItem('token')) {
        next();
      } else {
        next({ name: 'Login' });
      }
    },
  },
  {
    path: '/user/:id(\\d+)/follow',
    name: 'UserFollows',
    component: UserFollows,
    beforeEnter: (to, from, next) => {
      if (sessionStorage.getItem('token')) {
        next();
      } else {
        next({ name: 'Login' });
      }
    },
  },
  {
    path: '/user/followers',
    name: 'MyFollowers',
    component: MyFollowers,
    beforeEnter: (to, from, next) => {
      if (sessionStorage.getItem('token')) {
        next();
      } else {
        next({ name: 'Login' });
      }
    },
  },
  {
    path: '/user/follow',
    name: 'MyFollows',
    component: MyFollows,
    beforeEnter: (to, from, next) => {
      if (sessionStorage.getItem('token')) {
        next();
      } else {
        next({ name: 'Login' });
      }
    },
  },
  {
    path: '/media/add',
    name: 'AddMedia',
    component: AddMedia,
    beforeEnter: (to, from, next) => {
      if (sessionStorage.getItem('token')) {
        next();
      } else {
        next({ name: 'Login' });
      }
    },
  },
  {
    path: '/media/:id(\\d+)',
    name: 'Medium',
    component: Medium,
    beforeEnter: (to, from, next) => {
      if (sessionStorage.getItem('token')) {
        next();
      } else {
        next({ name: 'Login' });
      }
    },
  },
  {
    path: '/:NotFound(.*)*',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
