<template>
  <div>
    <div id="main"></div>
    <div id="maychar"></div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, inject } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
const store = useStore()
const route = useRoute()
const router = useRouter()

let echarts = inject('echarts') // 主要
// 基本柱形图
const change = () => {
  const chartBox = echarts.init(document.getElementById('main')) // 主要
  const option = {
    xAxis: {
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {},
    series: [
      {
        type: 'line',
        data: [23, 24, 18, 25, 27, 28, 25]
      }
    ]
  }
  chartBox.setOption(option)
  // 根据页面大小自动响应图表大小
  window.addEventListener('resize', function () {
    chartBox.resize()
  })
}

onMounted(() => {
  change()
})
</script>

<style lang="scss" scoped>
@import '@/views/Home/index.scss';
</style>
