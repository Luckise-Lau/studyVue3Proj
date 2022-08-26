import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from 'vue-router'
import appLayout from '@/layout/appLayout.vue'
import productRoutes from './modules/product'
import orderRoutes from './modules/order'
import mediaRoutes from './modules/media'
import permissionRoutes from './modules/permission'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { store } from '@/store'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: appLayout,
    meta: {
      requiredAuth: true
    },
    children: [
      {
        path: '', // 默认子路由
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          crumbName: '首页'
        }
      },
      productRoutes,
      mediaRoutes,
      orderRoutes,
      permissionRoutes
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  }
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 路由前置守卫
router.beforeEach((to, from) => {
  // 加载进度条
  nprogress.start()
  // 必须登录才能查看
  if (to.meta.requiredAuth && !store.state.user) {
    return {
      path: '/login',
      query: { redirect: to.fullPath }
    }
  }
})

// 路由后置守卫
router.afterEach(() => {
  nprogress.done()
})

export default router
