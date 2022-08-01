<template>
  <h1>首页</h1>
  {{ $store.state.count }}
  {{ store.state.count }}
</template>

<script lang='ts' setup>
import { useStore } from '../../store'

const store = useStore()

console.log(store.state.count)
</script>

<style lang='less' scoped></style>
