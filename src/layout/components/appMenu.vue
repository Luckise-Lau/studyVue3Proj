<template>
  <el-menu
    default-active="2"
    class="el-appMenu"
    :collapse="isCollapse"
    text-color="#FFF"
    @open="handleOpen"
    @close="handleClose"
    router
  >
    <el-menu-item
      class="el-appLogo"
      index="/"
    >
      <ElementPlus style="width: 60px; height: 60px; margin: 0 auto;" />
    </el-menu-item>
    <el-menu-item index="/">
      <el-icon><HomeFilled /></el-icon>
      <template #title>
        首页
      </template>
    </el-menu-item>
    <el-sub-menu index="/product">
      <template #title>
        <el-icon><GoodsFilled /></el-icon>
        <span>商品</span>
      </template>
      <el-menu-item index="/product/product_list">
        商品列表
      </el-menu-item>
      <el-menu-item index="/product/product_classify">
        商品分类
      </el-menu-item>
      <el-menu-item index="/product/product_attr">
        商品规格
      </el-menu-item>
      <el-menu-item index="/product/product_reply">
        商品评价
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="/order">
      <template #title>
        <el-icon><ShoppingCartFull /></el-icon>
        <span>订单</span>
      </template>
      <el-menu-item index="/order/order_list">
        订单列表
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item index="/media">
      <el-icon><VideoCameraFilled /></el-icon>
      <template #title>
        媒体
      </template>
    </el-menu-item>
    <el-sub-menu index="/permission">
      <template #title>
        <el-icon><Setting /></el-icon>
        <span>权限</span>
      </template>
      <el-menu-item index="/permission/permission_role">
        角色
      </el-menu-item>
      <el-menu-item index="/permission/permission_admin">
        管理员
      </el-menu-item>
      <el-menu-item index="/permission/permission_rule">
        权限规则
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang='ts' setup>
import { ref } from 'vue'

const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

</script>

<style lang='less' scoped>
  .el-appMenu{
    --bg-color: @appMenuBgColor;
    --el-menu-bg-color: @appMenuBgColor;
    --el-menu-hover-bg-color: @appMenuHoverBgColor;
    border-right: none;

    .el-appLogo{
      height: 100px; color: #409EFF;

      &:hover{
        background-color: transparent;
      }
    }

    &:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
    }

  }
</style>
