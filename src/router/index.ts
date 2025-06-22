import {createRouter, createWebHistory} from 'vue-router'
import Index from '@/views/Index.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import BusinessList from '@/views/BusinessList.vue'
import Order from '@/views/Order.vue'
import OrderList from '@/views/OrderList.vue'
import Payment from '@/views/Payment.vue'
import Discover from '@/views/Discover.vue'
import Profile from '@/views/Profile.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Index
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {hideFooter: true}
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        meta: {hideFooter: true}
    },
    {
        path: '/businessList',
        name: 'BusinessList',
        component: BusinessList
    },
    {
        path: '/business-info/:id',
        name: 'BusinessInfo',
        component: () => import('../views/BusinessInfo.vue')
    },
    {
        path: '/order',
        name: 'Order',
        component: Order
    },
    {
        path: '/orderList',
        name: 'OrderList',
        component: OrderList
    },
    {
        path: '/payment',
        name: 'Payment',
        component: Payment
    },
    {
        path: '/discover',
        name: 'Discover',
        component: Discover
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/'
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || {top: 0}
    }
})

export default router