<template>
  <div class="wrapper">
    <header class="header">
      <div class="card" v-for="(item, index) in cardList" :keys="item.id">
        {{ item.data }}
      </div>
    </header>
    <div class="line">
      <Line></Line>
    </div>
    <div class="charts">
      <Pie></Pie>
      <Bar></Bar>
    </div>
    <!-- <footer class="footer"></footer> -->
  </div>
</template>

<script setup>
import Line from '@/components/echarts/line/index.vue'
import Pie from '@/components/echarts/pie/index.vue'
import Bar from '@/components/echarts/bar/index.vue'
import { ref, reactive, computed, onMounted, inject } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
const store = useStore()
const route = useRoute()
const router = useRouter()
const cardList = reactive([
  { id: 0, data: 'aaa' },
  { id: 1, data: 'bbb' },
  { id: 2, data: 'ccc' },
  { id: 3, data: 'ddd' }
])
</script>

<style lang="scss" scoped>
@import '@/views/Home/index.scss';
</style>
