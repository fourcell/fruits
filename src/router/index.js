import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import goods from '../model/goods/router'
import home from '../model/home/router'
import user from '../model/user/router'
import order from '../model/order/router'

const routes = [
    {
        path: '/login',
        name: 'login',
        alias: '/',
        component: () => import('../pages/log')
    },
    {
        path: '/manage',
        name: 'manage',
        component: () => import('../pages/manage'),
        redirect: '/manage/home',
        meta: {
            title: '首页'
        },
        children: [
            ...goods,
            ...home,
            ...user,
            ...order
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router