import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { state, State } from './types'
import { setItem } from '@/utils/storage'
import { USER } from '@/utils/constants'

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol('store')

export const store = createStore<State>({
  state,
  mutations: {
    increment (state) {
      state.count++
    },
    // 左侧菜单显示隐藏
    setIsCollapse (state, payload) {
      state.isCollapse = payload
    },
    // 登录用户信息
    setUser (state, payload) {
      state.user = payload
      setItem(USER, state.user)
    }
  }
})

// 定义自己的 useStore 组合函数
export const useStore = () => baseUseStore(key)
