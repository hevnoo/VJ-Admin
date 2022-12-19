<template>
  <div id="pie"></div>
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
  const chartBox = echarts.init(document.getElementById('pie')) // 主要
  const option = {
    title: {
      text: '产品销售比例'
    },
    legend: {
      top: 'bottom'
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: '产品销售比例',
        type: 'pie',
        radius: [20, 100],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: [
          { value: 40, name: 'rose 1' },
          { value: 38, name: 'rose 2' },
          { value: 32, name: 'rose 3' },
          { value: 30, name: 'rose 4' },
          { value: 28, name: 'rose 5' },
          { value: 26, name: 'rose 6' }
        ]
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
#pie {
  width: 47%;
  height: 300px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
}
</style>
