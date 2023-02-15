<template>
  <!-- 系统管理 -->
  <router-view></router-view>
</template>

<script setup>
import { ref, reactive, onMounted, computed, watch } from 'vue'
import { useRoute, useRouter, onBeforeRouteLeave } from 'vue-router'
import { useStore } from 'vuex'
import storage from '@/utils/storage.js'
const store = useStore()
const route = useRoute()
const router = useRouter()
//初始化加载列表数据
const aa = () => {
  store.dispatch('userList/getUser')
}
setTimeout(() => {
  aa()
}, 200)
</script>

<style lang="scss" scoped></style>
