import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const Home = () => import('@/views/home/Home.vue');
const Categary = () => import('@/views/categary/Categary.vue');
const Cart = () => import('@/views/cart/Cart.vue');
const Profile = () => import('@/views/profile/Profile.vue');
const Detail = () => import('@/views/detail/Detail.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/categary',
    name: 'Categary',
    component: Categary
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/detail/:iid',
    name: 'Detail',
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router