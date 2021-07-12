import {
  createRouter,
  createWebHashHistory
} from "vue-router";
import Home from '@/pages/home';
const router = createRouter({
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: "home",
      component: Home,
    }
  ],
  history: createWebHashHistory(),
})

router.beforeEach((to, from, next) => {
  if (to.path == '/') {
    next(false)
  } else {
    next()
  }
})

export default router