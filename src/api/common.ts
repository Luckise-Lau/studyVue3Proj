/**
 * 公共基础请求模块
 */
import request from '@/utils/request'
import { ILoginInfo, ILoginReqPS, ILoginResponse } from '@/api/types/commonTypes'

// 获取登录基本信息
export const getLoginInfo = () => request<ILoginInfo>({
  method: 'GET',
  url: '/admin/login/info'
})

// 获取验证码图片
export const getCaptcha = () => request<Blob>({
  method: 'GET',
  url: '/admin/captcha_pro',
  params: {
    stamp: Date.now()
  },
  responseType: 'blob' // 请求获取图片数据
})

// 用户登录
export const login = (data: ILoginReqPS) => request<ILoginResponse>({
  method: 'POST',
  url: '/admin/login',
  data
})

// 用户退出
export const logout = () => request<ILoginResponse>({
  method: 'GET',
  url: '/admin/setting/admin/logout'
})
