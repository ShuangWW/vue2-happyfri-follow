import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/page/home')
const Item = () => import('@/page/item')
const Score = () => import('@/page/score')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/item',
      name: 'Item',
      component: Item
    },
    {
      path: '/score',
      name: 'Score',
      component: Score
    }
  ]
})
