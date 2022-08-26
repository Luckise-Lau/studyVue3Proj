<template>
  <el-dropdown class="headerUser">
    <span class="el-dropdown-link">
      {{ userAccount }}
      <el-icon class="el-icon--right">
        <Arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item @click="handleLogout">
          退出登录
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang='ts' setup>
import { useStore } from '@/store'
import { ElMessage, ElMessageBox } from 'element-plus'
import { logout } from '@/api/common'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()
// 用户登录名
const userAccount = store.state.user?.account
// 推出登录
const handleLogout = () => {
  ElMessageBox.confirm('确定退出嘛?')
    .then(async () => {
      await logout()
      router.push({
        name: 'login'
      })
      // 清除本地存储
      store.commit('setUser', null)
      ElMessage({
        type: 'success',
        message: '退出成功'
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '取消退出',
        duration: 800
      })
    })
}
</script>

<style lang='less' scoped>
  .headerUser{
    position: absolute; top: 20px;
    right: 10px; cursor: pointer;
  }
</style>
