<template>
  <el-icon
    @click="toggleFullScreen"
    class="el-toggoleFullScreen"
  >
    <FullScreenIcon />
  </el-icon>
</template>

<script lang='ts' setup>
import { Aim, FullScreen } from '@element-plus/icons-vue'
import { ref } from 'vue'

const FullScreenIcon = ref(FullScreen)

const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen()
    FullScreenIcon.value = Aim
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
      FullScreenIcon.value = FullScreen
    }
  }
}
</script>

<style lang='less' scoped>
  .el-toggoleFullScreen{
    font-size: 20px; cursor: pointer;
    color: #206BC4; vertical-align: 2px;
    float: right; margin-top: 20px;
    margin-right: 70px;
  }
</style>
