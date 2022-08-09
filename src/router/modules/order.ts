import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw = {
  path: 'order',
  name: 'order',
  component: RouterView,
  meta: {
    crumbName: '订单'
  },
  children: [
    {
      path: 'order_list',
      name: 'orderList',
      component: () => import('@/views/order/list/index.vue'),
      meta: {
        crumbName: '订单列表'
      }
    }
  ]
}

export default routes
