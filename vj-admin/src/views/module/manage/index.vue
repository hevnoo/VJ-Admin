<template>
  <!-- 出货清单 -->
  <div class="wrapper-collect" v-if="manageList !== []">
    <header class="header">
      <span class="logo">出货清单：</span>
    </header>
    <main class="collectTable">
      <manageTable></manageTable>
    </main>
    <footer class="page">
      <Pages></Pages>
    </footer>
  </div>
</template>

<script setup>
import manageTable from '@/views/module/manage/manageTable/index.vue'
import Pages from '@/components/pages/index.vue'
import { ref, reactive, computed, watch, onMounted } from 'vue'
import {
  useRoute,
  useRouter,
  onBeforeRouteLeave,
  onBeforeRouteUpdate
} from 'vue-router'
import { useStore } from 'vuex'
import storage from '@/utils/storage.js'
const store = useStore()
const route = useRoute()
const router = useRouter()

//初次加载就在本地加入页码
const currentPage = computed(() => store.state.appSwitch.currentPage)
storage.setItem_s('page', currentPage.value)
const aa = () => {
  store.dispatch('order/getManage', currentPage.value)
}
setTimeout(() => {
  aa()
}, 200)
const manageList = computed(() => store.state.order.manageList)
//离开组件时将初始化分页。
onBeforeRouteLeave((to, from) => {
  storage.removeItem_s('page')
  store.commit('appSwitch/changePage', 1)
})
//
const info = reactive({
  page: currentPage.value || 1
})
watch(currentPage, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    store.dispatch('order/getManage', currentPage.value)
  }
})
</script>

<style lang="scss" scoped>
.wrapper-collect {
  margin-top: 10px;
}
.header {
  margin-bottom: 10px;
  margin-left: 4px;
  .logo {
    font-size: 18px;
    font-weight: 520;
  }
}
.page {
  margin-top: 20px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
}
</style>
