<template>
  <div id="line"></div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, inject, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
const store = useStore()
const route = useRoute()
const router = useRouter()
const aa = () => {
  store.dispatch('home/getDateMoney')
}
aa()
const dateMoney = computed(() => store.state.home.dateMoney)

let echarts = inject('echarts') // 主要
// 图
const change = () => {
  const chartBox = echarts.init(document.getElementById('line')) // 绘制图表
  const option = {
    title: {
      text: '季销售额'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      // data: ['季销售额', '每季成本']
      data: ['销售额']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['春季', '夏季', '秋季', '冬季']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '销售额',
        type: 'line',
        stack: 'Total',
        data: dateMoney.value
      }
    ]
  }
  chartBox.setOption(option, true)
  // 根据页面大小自动响应图表大小
  window.addEventListener('resize', function () {
    chartBox.resize()
  })
}

onMounted(() => {
  //初始化图表实例,这里删掉是因为下面监听触发实例化，去掉重复。
  // change()
})

watch(dateMoney, (val) => {
  if (dateMoney.value) {
    //有数据之后，再触发重绘表格。防止挂载后没有数据
    setTimeout(() => {
      change()
    }, 100)
  }
})
//
</script>

<style lang="scss" scoped>
#line {
  width: 100%;
  height: 345px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
}
</style>
