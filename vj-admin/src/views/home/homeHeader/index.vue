<template>
  <div class="card" v-for="(item, index) in cardList" :keys="item.id">
    <section class="front_card" :style="{ backgroundColor: item.color }">
      <el-icon class="icon"><component :is="item.icon"></component></el-icon>
    </section>
    <section class="back_card">
      <div class="num">{{ item.data }}</div>
      <div class="names">{{ item.lable }}</div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
const store = useStore()
const route = useRoute()
const router = useRouter()
const orders = () => {
  store.dispatch('home/getAllOrders')
}
const goods = () => {
  store.dispatch('home/getAllGoods')
}
const moneys = () => {
  store.dispatch('home/getMoney')
}
const classes = () => {
  store.dispatch('home/getAllClasses')
}
setTimeout(() => {
  orders()
  goods()
  moneys()
  classes()
}, 300)

const allOrders = computed(() => store.state.home.allOrders)
const allGoods = computed(() => store.state.home.allGoods)
const money = computed(() => store.state.home.money)
const allClasses = computed(() => store.state.home.allClasses)

const cardList = reactive([
  { id: 0, lable: '交易订单', data: 0, color: '#40c9c6', icon: 'List' },
  { id: 1, lable: '商品数量', data: 0, color: '#36a3f7', icon: 'Goods' },
  { id: 2, lable: '交易金额', data: 0, color: '#f4516c', icon: 'Printer' },
  { id: 3, lable: '商品类别', data: 0, color: '#34bfa3', icon: 'Grid' }
])
const wc = watch(allOrders, (newVal, oldVal) => {
  if (allOrders.value !== 0) {
    cardList[0].data = allOrders.value
  }
})
watch(allGoods, (val) => {
  if (allGoods.value !== 0) {
    cardList[1].data = allGoods.value
  }
})
watch(money, (val) => {
  if (allGoods.value !== 0) {
    cardList[2].data = money.value + '￥'
  }
})
watch(allClasses, (val) => {
  if (allGoods.value !== 0) {
    cardList[3].data = allClasses.value
  }
})

onMounted(() => {
  cardList[0].data = allOrders.value
  cardList[1].data = allGoods.value
  cardList[2].data = money.value + '￥'
  cardList[3].data = allClasses.value
})
</script>

<style lang="scss" scoped>
.card {
  width: 23%;
  height: 105px;
  background-color: rgba(255, 255, 255, 1);
  // box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  display: flex;
}
.card:hover {
  box-shadow: 0 4px 12px 0 rgb(0 0 0 / 20%);
}
.front_card {
  width: 40%;
  height: 100%;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  // background-color: v-bind(color);
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon {
  font-size: 43px;
  color: aliceblue;
  width: auto;
  height: auto;
}
.back_card {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .num {
    font-size: 25px;
    margin-bottom: 4px;
  }
  .names {
    font-size: 13.5px;
  }
}
</style>
