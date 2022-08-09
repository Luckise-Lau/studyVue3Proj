import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw = {
  path: 'permission',
  name: 'permission',
  component: RouterView,
  meta: {
    crumbName: '权限'
  },
  children: [
    {
      path: 'permission_role',
      name: 'permissionRole',
      component: () => import('@/views/permission/role/index.vue'),
      meta: {
        crumbName: '角色'
      }
    },
    {
      path: 'permission_admin',
      name: 'permissionAdmin',
      component: () => import('@/views/permission/admin/index.vue'),
      meta: {
        crumbName: '管理员'
      }
    },
    {
      path: 'permission_rule',
      name: 'permissionRule',
      component: () => import('@/views/permission/rule/index.vue'),
      meta: {
        crumbName: '规则'
      }
    }
  ]
}

export default routes
