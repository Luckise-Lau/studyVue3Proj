import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { state, State } from './types'

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol('store')

export const store = createStore<State>({
  state,
  mutations: {
    increment (state) {
      state.count++
    },

    setIsCollapse (state, payload) {
      state.isCollapse = payload
    }
  }
})

// 定义自己的 useStore 组合函数
export const useStore = () => baseUseStore(key)
