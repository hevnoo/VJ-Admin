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
// let current = ref(1)
const total = computed(() => store.state.goods.total)
const pageSize = computed(() => store.state.goods.pageSize)
const currentPage = computed(() => store.state.goods.currentPage)
//当前页改变时触发。
const currentChange = (val) => {
  // console.log(`当前页: ${val}`)
  store.commit('goods/changePage', val)
  // setTimeout(() => {
  //   store.dispatch('goods/getGoodsList', val)
  // }, 500)
}
</script>

<style lang="scss" scoped></style>
