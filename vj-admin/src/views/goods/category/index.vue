<template>
  <div class="wrapper">
    <header class="cateHeader"><cateHeader></cateHeader></header>
    <main class="cateTable"><cateTable></cateTable></main>
    <!-- <footer class="pageFooter"><Pages></Pages></footer> -->
  </div>
</template>

<script setup>
import cateHeader from '@/views/goods/category/cateHeader/index.vue'
import cateTable from '@/views/goods/category/cateTable/index.vue'
import Pages from '@/components/pages/index.vue'
import { ref, onMounted, computed, watch } from 'vue'
import { useStore } from 'vuex'
import storage from '@/utils/storage.js'
const store = useStore()
//在最外层的父组件请求初始数据
const getAllClass = () => {
  store.dispatch('classes/getClass')
}
getAllClass()
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 10px;
}
.cateHeader {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  background-color: #f5fafe;
}
.cateTable {
}
</style>
