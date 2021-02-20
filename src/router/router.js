import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../login/Login.vue'
import { authGuard } from '../_helpers/auth-guard';

const routes = [
  {
    path: '/', name: 'Home',  component: Home,
    beforeEnter: authGuard,
    // beforeEach:authGuard
  },
  {
    path:'/login',name:'login',component:Login
  }
]


export const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(),
  routes
})

// export default router
