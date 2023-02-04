<template>
  <!-- 产品管理 -->
  <router-view></router-view>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()
//在最外层的父组件请求初始数据,获取分类列表数据
const getAllClass = () => {
  store.dispatch('classes/getClass')
}
getAllClass()
</script>

<style lang="scss" scoped></style>
