import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw = {
  path: 'media',
  name: 'media',
  component: () => import('@/views/media/index.vue'),
  meta: {
    crumbName: '媒体'
  }
}

export default routes
