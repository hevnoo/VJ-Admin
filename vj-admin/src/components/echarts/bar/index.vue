<template>
  <div id="bar"></div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, inject, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
const store = useStore()
const route = useRoute()
const router = useRouter()
const aa = () => {
  store.dispatch('home/getOrderNumber')
}
aa()
const orderNumber = computed(() => store.state.home.orderNumber)

let echarts = inject('echarts') // 主要
const change = () => {
  const chartBox = echarts.init(document.getElementById('bar'))
  const option = {
    title: {
      text: '订单数量'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['春', '夏', '秋', '冬'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Direct',
        type: 'bar',
        barWidth: '60%',
        data: orderNumber.value
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
  // change()
})

watch(orderNumber, (val) => {
  if (orderNumber.value) {
    setTimeout(() => {
      change()
    }, 100)
  }
})
</script>

<style lang="scss" scoped>
#bar {
  width: 50%;
  height: 300px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
}
</style>
