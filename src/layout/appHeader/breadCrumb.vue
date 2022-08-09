<template>
  <el-breadcrumb
    class="el-headerCrumb"
    separator="/"
  >
    <el-breadcrumb-item
      v-for="item in routerMatched"
      :key="item.path"
      :to="item.path"
    >
      {{ item.meta.crumbName }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang='ts' setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const routerMatched = computed(() => router.currentRoute.value.matched.filter(item => item.meta.crumbName))
</script>

<style lang='less' scoped>
  .el-headerCrumb{
    display: inline-block; margin-left: 10px;
    vertical-align: 5px;
  }
</style>
