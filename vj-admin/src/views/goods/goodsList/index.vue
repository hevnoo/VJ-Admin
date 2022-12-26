<template>
  <div class="wrapper-goods" v-show="goodsList">
    <header class="search">
      <SearchGoods></SearchGoods>
    </header>
    <main class="table">
      <GoodsTable></GoodsTable>
    </main>
    <footer class="page">
      <Pages></Pages>
    </footer>
  </div>
</template>

<script setup>
import SearchGoods from '@/views/goods/goodsList/searchGoods/index.vue'
import GoodsTable from '@/views/goods/goodsList/goodsTable/index.vue'
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

const total = computed(() => store.state.goods.total)
const currentPage = computed(() => store.state.goods.currentPage)
storage.setItem_s('goodsPage', currentPage.value)
const getGoodsList = () => {
  store.dispatch('goods/getGoodsList', currentPage.value)
}
setTimeout(() => {
  getGoodsList()
}, 500)

const goodsList = computed(() => store.state.goods.goodsList)
onBeforeRouteLeave((to, from) => {
  storage.removeItem_s('goodsPage')
})
// const currentPath = ref(router.currentRoute.value.path)
// watch(
//   currentPath,
//   (newVal, oldVal) => {
//     if (newVal == '/goods/goodsList') {
//       // console.log('***', newVal)
//       storage.setItem_s('goodsPage', currentPage.value)
//     } else {
//       storage.removeItem_s('goodsPage')
//     }
//   },
//   { immediate: true, deep: true }
// )
</script>

<style lang="scss" scoped>
.wrapper-goods {
  margin-top: 10px;
}
.search {
  width: 100%;
  height: 65px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  display: flex;
  align-items: center;
  padding: 20px;
}
.table {
  width: 100%;
  min-height: 280px;
  // background-color: rgba(255, 255, 255, 1);
  // box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  margin-top: 20px;
  // padding: 10px;
}
.page {
  margin-top: 20px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
}
</style>
