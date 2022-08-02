/**
 * 公共基础请求模块
 */
import request from '@/utils/request'
import { ILoginInfo } from '@/api/types/commonTypes'

export const getLoginInfo = () => request<ILoginInfo>({
  method: 'GET',
  url: '/login/info'
})
