<template>
  <!-- 订单列表 -->
  <div class="wrapper" v-show="orderList">
    <header class="orderHeader">
      <orderHeader></orderHeader>
    </header>
    <main class="orderTable">
      <orderTable></orderTable>
    </main>
    <footer class="pages">
      <Pages></Pages>
    </footer>
  </div>
</template>

<script setup>
import orderHeader from '@/views/orders/orderList/orderHeader/index.vue'
import orderTable from '@/views/orders/orderList/orderTable/index.vue'
import Pages from '@/components/pages/index.vue'
import { ref, onMounted, computed, watch } from 'vue'
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
//初始化加载列表数据
const aa = () => {
  store.dispatch('order/getOrder', currentPage.value)
}
setTimeout(() => {
  aa()
}, 300)
const orderList = computed(() => store.state.order.orderList)
//离开组件时将初始化分页。
onBeforeRouteLeave((to, from) => {
  storage.removeItem_s('page')
  store.commit('appSwitch/changePage', 1)
})
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 10px;
}
.orderHeader {
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  background-color: #f5fafe;
}
.orderTable {
}
.pages {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
