<template>
  <div class="wrapper">
    <el-pagination
      background
      layout="total, prev, pager, next, jumper"
      :total="total"
      :page-size="pageSize"
      :current-page="currentPage"
      @current-change="currentChange"
    >
    </el-pagination>
  </div>
</template>

<script setup>
import { ref, reactive, defineProps, computed, defineEmits } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import storage from '@/utils/storage.js'
const store = useStore()
const route = useRoute()
const router = useRouter()
// const emits = defineEmits(['currentChange'])
// emits('currentChange', currentPage)

// console.log(router.currentRoute.value.name)
const total = computed(() => {
  if (router.currentRoute.value.name === 'goodsList') {
    return store.state.goods.total
  } else if (router.currentRoute.value.name == 'orderList' || 'collect') {
    return store.state.order.total
  } else {
    return 10
  }
})
const pageSize = computed(() => {
  if (router.currentRoute.value.name === 'goodsList') {
    return store.state.goods.pageSize
  } else if (router.currentRoute.value.name == 'orderList' || 'collect') {
    return store.state.order.pageSize
  } else {
    return 10
  }
})
const currentPage = computed(() => store.state.appSwitch.currentPage)
//当前页改变时触发。
const currentChange = (val) => {
  // console.log(`当前页: ${val}`)
  // store.commit('goods/changePage', val)
  store.commit('appSwitch/changePage', val)
}
</script>

<style lang="scss" scoped></style>
