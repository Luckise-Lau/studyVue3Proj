<template>
  <el-icon
    class="el-sliderHandleBtn"
    @click="handleIsCollapse"
  >
    <IsCollapseIcon />
  </el-icon>
</template>

<script lang='ts' setup>
import { useStore } from '@/store'
import { computed } from 'vue'
import { Expand, Fold } from '@element-plus/icons-vue'

const store = useStore()

const IsCollapseIcon = computed(() => {
  return store.state.isCollapse ? Expand : Fold
})

const handleIsCollapse = () => {
  store.commit('setIsCollapse', !store.state.isCollapse)
}
</script>

<style lang='less' scoped>

.el-sliderHandleBtn{
  margin-top: 18px; cursor: pointer;
  font-size: 25px; color: #206BC4;
}

</style>
