/**
 * 权限: 管理员请求模块
 */
import request from '@/utils/request'
import type { IGetAdminListPs, IAdmin } from './types/adminTypes'

export const getAdminList = (params: IGetAdminListPs) => request<{
  count: number,
  list: IAdmin[]
}>({
  method: 'GET',
  url: '/admin/setting/admin',
  params
})
