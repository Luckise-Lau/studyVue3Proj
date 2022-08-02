import axios, { AxiosRequestConfig } from 'axios'
import type { IResponseData } from '@/api/types/publicTypes'

const request = axios.create({
  baseURL: 'https://shop.fed.lagounews.com/api/admin'
})

// 请求拦截器
request.interceptors.request.use(config => {
  // 在发送请求之前做的事情 Ex: 统一处理用户 token

  return config
}, error => {
  // 请求错误做的事情

  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(response => {
  //  2xx 范围内的状态码都会触发该函数 -> 对响应数据做的事情 Ex: 统一处理 token 过期、服务端异常等

  return response
})

export default <T>(config: AxiosRequestConfig) => request(config).then(res => res.data as IResponseData<T>)
