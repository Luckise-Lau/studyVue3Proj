<template>
  <h1>首页</h1>
  {{ $store.state.count }}
  {{ store.state.count }}
  <img
    src="@/assets/vue.svg"
    alt="logo"
  >
  <div class="csa" />
  <el-button>测试按钮</el-button>
  <el-date-picker
    v-model="value1"
    type="date"
    placeholder="Pick a day"
    :size="size"
  />
</template>

<script lang='ts' setup>
import { useStore } from '@/store'

const store = useStore()
const value1 = ''
const size = ''

console.log(store.state.count)
</script>

<style lang='less' scoped>
.csa{
  width: 200px;
  height: 200px;
  background: url('@/assets/vue.svg') no-repeat;
}
h1{
  color: @color;
}
</style>
