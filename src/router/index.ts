import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from 'vue-router'
import appLayout from '@/layout/appLayout.vue'
import productRoutes from './modules/product'
import orderRoutes from './modules/order'
import mediaRoutes from './modules/media'
import permissionRoutes from './modules/permission'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: appLayout,
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
router.beforeEach(() => {
  nprogress.start()
})

// 路由后置守卫
router.afterEach(() => {
  nprogress.done()
})

export default router
