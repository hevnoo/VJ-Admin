<template>
  <div class="wrapper">
    <header class="header">
      <homeHeader></homeHeader>
    </header>
    <div class="line" v-if="dateMoney !== []">
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
import homeHeader from '@/views/home/homeHeader/index.vue'
import Line from '@/components/echarts/line/index.vue'
import Pie from '@/components/echarts/pie/index.vue'
import Bar from '@/components/echarts/bar/index.vue'
import { ref, reactive, computed, watchEffect, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
const store = useStore()
const route = useRoute()
const router = useRouter()
const dateMoney = computed(() => store.state.home.dateMoney)

//
</script>

<style lang="scss" scoped>
.wrapper {
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
}
.header {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
//
.line {
  margin-top: 30px;
  margin-bottom: 30px;
}
.charts {
  width: 100%;
  height: 300px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
}
</style>
