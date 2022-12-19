<template>
  <!-- <header class="logo">
    <img src="@/assets/logo.png" alt="" />
    <div class="logo-name">Admin</div>
  </header>
  <el-menu
    default-active="/"
    active-text-color="#20b0ac"
    background-color="#202a40"
    text-color="#bfcbd9"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    :router="true"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item index="/home">
      <el-icon><setting /></el-icon>
      <template #title>首页</template>
    </el-menu-item>
    <el-sub-menu index="/goods">
      <template #title>
        <el-icon><location /></el-icon>
        <span>产品管理</span>
      </template>
      <el-menu-item index="/goods/list">产品列表</el-menu-item>
      <el-menu-item index="/goods/category">产品分类</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="/orders">
      <template #title>
        <el-icon><icon-menu /></el-icon>
        <span>订单管理</span>
      </template>
      <el-menu-item index="/orders/list">订单列表</el-menu-item>
      <el-menu-item index="/orders/collect">汇总清单</el-menu-item>
      <el-menu-item index="/orders/auditing">订单审核</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>
        <el-icon><document /></el-icon>
        <span>产品分类</span>
      </template>
      <el-menu-item index="3-1">item one</el-menu-item>
      <el-menu-item index="3-2">item two</el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="/system">
      <template #title>
        <el-icon><icon-menu /></el-icon>
        <span>系统管理</span>
      </template>
      <el-menu-item index="/system/roles">角色管理</el-menu-item>
      <el-menu-item index="/system/department">部门管理</el-menu-item>
    </el-sub-menu>
  </el-menu>
  <div v-for="(item, index) in menuList" :key="item.id">
    {{ item.path }}
  </div> -->
</template>

<script setup>
// import { ref, onMounted } from 'vue'
// import {
//   Document,
//   Menu as IconMenu,
//   Location,
//   Setting
// } from '@element-plus/icons-vue'
// import { getMenuList } from '@/Layout/Menu/menuList.js'

// const menuList = getMenuList()
// console.log('***', menuList)
// //
// const isCollapse = ref(false)
// const handleOpen = (key, keyPath) => {
//   console.log(key, keyPath)
// }
// const handleClose = (key, keyPath) => {
//   console.log(key, keyPath)
// }
//
</script>

<style lang="scss" scoped></style>
