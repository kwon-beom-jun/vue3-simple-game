import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'LottoMainView',
    component: () => import(/* webpackChunkName: "lottomainview" */ '../views/LottoMainView.vue')
  },{
    path: '/rsp',
    name: 'RspMainView',
    component: () => import(/* webpackChunkName: "rspMainView" */ '../views/RspMainView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router