<template>
  <el-table
    :data="manageList"
    style="width: 100%"
    :border="true"
    fit
    :span-method="spanMethod"
  >
    <!-- <el-table-column prop="id" label="ID" width="180" /> -->
    <el-table-column prop="clientName" label="顾客名称" />
    <el-table-column prop="goodsName" label="商品名称" />
    <el-table-column prop="saleNumber" label="出售数量" />
    <el-table-column prop="goodsPrice" label="销售额" />
    <el-table-column prop="saleDate" label="日期" />
  </el-table>
</template>

<script setup>
import { ref, reactive, computed, watchEffect, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
const store = useStore()
const route = useRoute()
const router = useRouter()
const manageList = computed(() => store.state.order.manageList)
let getNum = new Map()
let num = 0
//定义一个map对象存储相同name出现的次数
const count = (data) => {
  let dataMap = new Map()
  for (let i = 0; i < data.length; i++) {
    let key = data[i].clientName
    if (dataMap.has(key)) {
      dataMap.set(key, dataMap.get(key) + 1)
    } else {
      dataMap.set(key, 1)
    }
  }
  getNum = dataMap
  console.log(getNum)
}

//对el-table 自带的span-method方法略加修改
const spanMethod = ({ row, column, rowIndex, columnIndex }) => {
  if (columnIndex === 0) {
    let initNum = num
    if (initNum + 1 == getNum.get(row.clientName)) {
      num = 0
    } else {
      num++
    }
    console.log(num, initNum)
    if (initNum % getNum.get(row.clientName) === 0) {
      return {
        rowspan: getNum.get(row.clientName),
        colspan: 1
      }
    } else {
      return {
        rowspan: 0,
        colspan: 0
      }
    }
  }
}
//-----------------------------------
//记录每一行设置的合并数
const handleData = (data) => {
  mergeSpanArr.length = data.length
  data.map((i, index) => {
    mergeSpanArr[index] = 1
  })
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (data[i].clientName === data[j].clientName) {
        mergeSpanArr.splice(j, 1, 0)
      }
    }
  }
  console.log('----', mergeSpanArr)
}
const getSpanArr = (data) => {
  // data就是后台拿到的数据
  for (var i = 0; i < data.length; i++) {
    if (i === 0) {
      spanArr.push(1)
      pos = 0
    } else {
      // 判断当前元素与上一个元素是否相同
      if (data[i].clientName === data[i - 1].clientName) {
        spanArr[pos] += 1
        spanArr.push(0)
      } else {
        spanArr.push(1)
        pos = i
      }
    }
    // console.log(spanArr)
  }
}
watch(
  manageList,
  (val) => {
    count(manageList.value)
  }
  // { immediate: true, deep: true }
)
</script>

<style lang="scss" scoped>
//表格 行
// ::v-deep tr {
//   height: 50px;
// }

//表头 行
::v-deep th {
  height: 42px;
  background-color: #f5fafe !important;
}
</style>
