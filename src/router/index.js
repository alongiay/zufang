import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
const Home = () => import('@/views/Home')
const News = () => import('@/views/News')
const House = () => import('@/views/House')
const My = () => import('@/views/My')
const Login = () => import('@/views/Login')
const Registe = () => import('@/views/registe')
const Map = () => import('@/views/Home/components/Map')
const Publish = () => import('@/views/Publish')

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Layout,
  redirect: '/home',
  children: [
    { path: 'home', component: Home },
    { path: 'news', component: News },
    { path: 'house', component: House },
    { path: 'my', component: My }
  ]
},
{ path: '/login', component: Login },
{ path: '/registe', component: Registe },
{ path: '/map', component: Map },
{ path: '/publish', component: Publish }

]

const router = new VueRouter({
  routes
})

export default router
