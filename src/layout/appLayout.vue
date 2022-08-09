<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <app-menu />
      </el-aside>
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-main>
          <!-- 子路由出口 -->
          <router-view />
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script lang='ts' setup>
import AppMenu from './appMenu/index.vue'
import Header from './appHeader/index.vue'
</script>

<style lang='less' scoped>
.el-container{
  height: 100vh;

  .el-header {
    position: relative;
    background-color: var(--el-color-primary-light-7);
    color: var(--el-text-color-primary);
  }

  .el-aside {
    color: var(--el-text-color-primary);
    background: @appMenuBgColor; width: auto;
  }

  .el-main {
    padding: 0;
  }
}
</style>
