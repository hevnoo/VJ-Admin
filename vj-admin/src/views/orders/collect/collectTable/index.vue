<template>
  <el-table :data="collectList" show-summary style="width: 100%">
    <el-table-column prop="id" label="ID" width="180" />
    <el-table-column prop="saleDate" label="日期" />
    <el-table-column prop="goodsName" label="商品名称" />
    <el-table-column prop="saleNumber" label="出售数量" />
    <el-table-column prop="goodsPrice" label="销售额" />
  </el-table>
</template>

<script setup>
import { ref, reactive, computed, watchEffect, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
const store = useStore()
const route = useRoute()
const router = useRouter()
const collectList = computed(() => store.state.order.collectList)
</script>

<style lang="scss" scoped>
//表头
::v-deep th {
  height: 42px;
  background-color: #f5fafe !important;
}
</style>
