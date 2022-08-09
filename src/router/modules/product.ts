import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw = {
  path: 'product',
  name: 'product',
  component: RouterView,
  meta: {
    crumbName: '商品'
  },
  children: [
    {
      path: 'product_list',
      name: 'productList',
      component: () => import('@/views/product/list/index.vue'),
      meta: {
        crumbName: '商品列表'
      }
    },
    {
      path: 'product_classify',
      name: 'productClassify',
      component: () => import('@/views/product/classify/index.vue'),
      meta: {
        crumbName: '商品分类'
      }
    },
    {
      path: 'product_attr',
      name: 'productAttr',
      component: () => import('@/views/product/attr/index.vue'),
      meta: {
        crumbName: '商品规格'
      }
    },
    {
      path: 'product_reply',
      name: 'productReply',
      component: () => import('@/views/product/reply/index.vue'),
      meta: {
        crumbName: '商品评价'
      }
    }
  ]
}

export default routes
