<template>
  <h1>首页</h1>
  {{ $store.state.count }}
  {{ store.state.count }}
  <img
    src="@/assets/vue.svg"
    alt="logo"
  >
  <div class="csa" />
</template>

<script lang='ts' setup>
import { useStore } from '@/store'

const store = useStore()

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
