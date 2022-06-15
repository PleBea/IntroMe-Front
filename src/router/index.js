import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage'
import LoginPage from '../views/LoginPage'
import ProfilePage from '../views/ProfilePage'
import SigninPage from '../views/SigninPage'

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/profile',
    name: 'ProfilePage',
    component: ProfilePage
  },
  {
    path: '/regsiter',
    name: 'SigninPage',
    component: SigninPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
