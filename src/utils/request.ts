import axios, { AxiosRequestConfig } from 'axios'
import type { IResponseData } from '@/api/types/publicTypes'
import { ElMessage, ElMessageBox } from 'element-plus'
import { store } from '@/store'
import router from '@/router'

const request = axios.create({
  // baseURL: import.meta.env.VITE_API_BASE_URL
})

// 请求拦截器
request.interceptors.request.use(config => {
  // 在发送请求之前做的事情
  // 统一处理用户 token
  const user = store.state.user
  if (user && user.token && config.headers) {
    config.headers.Authorization = `Bearer ${user.token}`
  }
  return config
}, error => {
  // 请求错误做的事情

  return Promise.reject(error)
})

// 响应拦截器
let tokenLoading = false
request.interceptors.response.use(response => {
  //  2xx 范围内的状态码都会触发该函数 -> 对响应数据做的事情 Ex: 统一处理 token 过期、服务端异常等
  const status = response.data.status
  // 正确的情况
  if (!status || status === 200) {
    return response
  }

  // 错误情况: token 无效
  if (status === 410000) {
    if (tokenLoading) return Promise.reject(response)
    tokenLoading = true
    ElMessageBox.confirm('登录过期, 是否跳转到登录页面?', '登录过期', {
      confirmButtonText: '跳转',
      cancelButtonText: '取消'
    }).then(() => {
      // 清除登录状态
      store.commit('setUser', null)
      // 跳转到登录页面
      router.push({
        name: 'login',
        query: {
          redirect: router.currentRoute.value.fullPath
        }
      })
    }).finally(() => {
      // 登录过期后, 处理高频需要 token 的请求
      tokenLoading = false
    })
    // 抛出异常
    return Promise.reject(response)
  }

  // 其他错误情况
  ElMessage.error(response.data.msg || '请求失败, 请稍后重试!')
  // 手动抛出异常
  return Promise.reject(response)
}, error => {
  // 状态码超过 2xx, 都会触发该事件

  return Promise.reject(error)
})

export default <T = any>(config: AxiosRequestConfig) => request(config).then(res => {
  console.log(res)
  return res.data as IResponseData<T>
})
