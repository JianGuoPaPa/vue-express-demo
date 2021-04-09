import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Routes = [
    {
        path: '/',
        redirect: '/todo-list',
    },
    {
        path: '/todo-list',
        name: 'todo-list',
        component: () => import('@/pages/vue-todo-list'),
    },
    {
        path: '/vue-component',
        name: 'vue-component',
        component: () => import('@/pages/vue-component'),
    },
    {
        path: '/vue-state',
        name: 'vue-state',
        component: () => import('@/pages/vue-state'),
    },
    {
        path: '/vue-router',
        name: 'vue-router',
        component: () => import('@/pages/vue-router'),
    },
    {
        path: '/vue-query',
        name: 'vue-query',
        component: () => import('@/pages/vue-query'),
    },
    {
        path: '/express-query',
        name: 'express-query',
        component: () => import('@/pages/express-query'),
    },
    {
        path: '/express-log',
        name: 'express-log',
        component: () => import('@/pages/express-log'),
    },
    {
        path: '/express-middleware',
        name: 'express-middleware',
        component: () => import('@/pages/express-middleware'),
    },
    {
        path: '/express-session',
        name: 'express-session',
        component: () => import('@/pages/express-session'),
    },
    {
        path: '/404',
        name: '404',
        component: () => import('@/pages/404'),
    },
    {
        path: '*',
        redirect: '/404',
        hidden: true,
        meta: {}
    }
]

const createRouter = () =>
    new Router({
        mode: 'history', // require service support
        scrollBehavior: () => ({
            y: 0
        }),
        routes: Routes
    })

const router = createRouter()

export default router
