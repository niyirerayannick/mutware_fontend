import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/register',
      name: 'RegisterPage',
      component: () => import('../views/Register.vue'),
    },
    {
      path: '/video-list',
      name: 'video-list',
      component: () => import('../views/VideoList.vue'),
    },
    {
      path: '/forget-password',
      name: 'ForgetPassword',
      component: () => import('../views/ForgetPassword.vue'),
    },
    {
      path: '/change-password',
      name: 'ChangePassword',
      component: () => import('../views/ChangePassword.vue'),
    },
    {
      path: '/membership',
      name: 'MembershipPage',
      component: () => import('../views/Membership.vue'),
    },
    {
      path: '/restrict',
      name: 'RestrictPage',
      component: () => import('../views/Restrict.vue'),
    },
    {
      path: '/stream',
      name: 'StreamPage',
      component: () => import('../views/Stream.vue'),
    },
    {
      path: '/watch/:id',
      name: 'WatchVideo',
      component: () => import('../views/Watch.vue'),
      beforeEnter: (to, from, next) => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user !== null) {
          next();
        } else {
          next({ path: '/restrict', query: { redirect: to.fullPath } });  
        }
      },
    },
    {
      path: '/category/:category_name',
      name: 'CategoryPage',
      component: () => import('../views/Category.vue'),
    },
    {
      path: '/search',
      name: 'SearchPage',
      component: () => import('../views/Search.vue'),
    },
    {
      path: '/profile',
      name: 'ProfilePage',
      component: () => import('../views/Profile.vue'),
    },
    {
      path: '/terms-conditions',
      name: 'TermsCondition.vue',
      component: () => import('../views/TermsCondition.vue'),
    },
    {
      path: '/protection-policy',
      name: 'ProtectionPolicy.vue',
      component: () => import('../views/ProtectionPolicy.vue'),
    },
    {
      path: '/404',
      name: '404Page',
      component: () => import('../views/404Page.vue'),
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: () => import('../views/404Page.vue'),
    },
  ],
})

export default router
