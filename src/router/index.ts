import { useUserStore } from '@/stores/user';
import { createRouter, createWebHashHistory,RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: () => import('@/views/home/Home.vue'),
    },
    {
        path: '/login',
        component: () => import('@/views/login/Login.vue'),
    },
    {
        path: '/register',
        component: () => import('@/views/login/Register.vue'),
    },
    {
        path: '/setting',
        component: () => import('@/views/setting/Setting.vue'),
    },
    {
        path: '/star',
        component: () => import('@/views/star/Star.vue'),
    },
    {
        // 捕获所有未匹配的路由
        path: '/:catchAll(.*)', 
        component: () => import('@/views/404/404.vue'),
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// 路由守卫
router.beforeEach((to,from,next) => {
    const userStore = useUserStore();

    // 用户无 token 则跳转至登录页面
    if((to.path != '/login' && !userStore.userInfo?.token) && to.path != '/register') {
        next('/login');
    }else {
        next();
    }
})

export default router;