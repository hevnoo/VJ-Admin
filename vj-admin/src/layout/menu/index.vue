<template>
  <el-menu
    :default-active="currentPath"
    active-text-color="#20b0ac"
    background-color="#202a40"
    text-color="#bfcbd9"
    class="el-menu-vertical-demo"
    :collapse="isClose"
    :router="true"
  >
    <header class="logo">
      <img src="@/assets/img/head/aHeader.png" alt="" />
      <div class="logo-name" v-if="!isClose">{{ $t('menu.logo') }}</div>
    </header>
    <template v-for="(item, index) in menuList" :key="item.id">
      <el-menu-item
        v-if="!item.children"
        :index="item.path"
        @click="getName(item.name)"
      >
        <el-icon><component :is="item.meta.icon"></component></el-icon>
        <template #title>{{ $t(`menu.${item.name}`) }}</template>
      </el-menu-item>
      <!--  -->
      <el-sub-menu v-else :index="item.path">
        <template #title>
          <el-icon><component :is="item.meta.icon"></component></el-icon>
          <span>{{ $t(`menu.${item.name}`) }}</span>
        </template>
        <el-menu-item
          v-for="(res, index) in item.children"
          :key="res.id"
          :index="res.path"
          @click="getName(res.name)"
          >{{ $t(`menu.${res.name}`) }}</el-menu-item
        >
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
// import variables from '@/styles/variables.scss'
import storage from '@/utils/storage.js'
const store = useStore()
const route = useRoute()
const router = useRouter()

const menuList = computed(() => store.state.login.menuList)
const currentPath = ref(router.currentRoute.value.path)
//收缩menu
const isClose = computed(() => store.state.appSwitch.isClose)
//面包屑，key值刷新
const breadKeys = computed(() => store.state.keys.breadKeys)
const getName = (name) => {
  storage.setItem_s('name', name)
  store.commit('keys/changeBreadKeys', breadKeys.value)
}

// 读取vuex的值要用计算属性！因为计算属性根据所依赖的值发生改变而改变。
// 不能用ref响应式获取vueX数据，因为这只是相当于初始化数据，无法获取vueX变化后的值。
// 计算属性简写形式不能修改值。
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
