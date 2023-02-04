import {
  AllOrdersApi,
  AllGoodsApi,
  moneyApi,
  AllClassesApi,
  dateMoneyApi,
  orderNumberApi
} from '@/api/home'
import router from '@/router'
import storage from '@/utils/storage'
import { ElMessage } from 'element-plus'

export default {
  namespaced: true,
  state: {
    allOrders: 0,
    allGoods: 0,
    money: 0,
    allClasses: 0,
    // dateMoney: [70, 50, 110, null]
    dateMoney: [],
    orderNumber: []
  },
  getters: {},
  mutations: {
    setAllOrders(state, val) {
      state.allOrders = val
    },
    setAllGoods(state, val) {
      state.allGoods = val
    },
    setMoney(state, val) {
      state.money = val
    },
    setAllClasses(state, val) {
      state.allClasses = val
    },
    setDateMoney(state, val) {
      state.dateMoney = val
    },
    setOrderNumber(state, val) {
      state.orderNumber = val
    }
  },
  actions: {
    //获取订单总数
    getAllOrders(context, val) {
      return new Promise((resolve, reject) => {
        AllOrdersApi(val)
          .then((res) => {
            if (res.data.status === 200) {
              context.commit('setAllOrders', res.data.data)
              resolve()
            }
          })
          .catch((err) => {
            console.log(err)
          })
      })
    },
    //获取订单总数
    getAllGoods(context, val) {
      return new Promise((resolve, reject) => {
        AllGoodsApi(val)
          .then((res) => {
            if (res.data.status === 200) {
              context.commit('setAllGoods', res.data.data)
              resolve()
            }
          })
          .catch((err) => {
            console.log(err)
          })
      })
    },
    //获取订单总数
    getMoney(context, val) {
      return new Promise((resolve, reject) => {
        moneyApi(val)
          .then((res) => {
            if (res.data.status === 200) {
              context.commit('setMoney', res.data.data)
              resolve()
            }
          })
          .catch((err) => {
            console.log(err)
          })
      })
    },
    //获取订单总数
    getAllClasses(context, val) {
      return new Promise((resolve, reject) => {
        AllClassesApi(val)
          .then((res) => {
            if (res.data.status === 200) {
              context.commit('setAllClasses', res.data.data)
              resolve()
            }
          })
          .catch((err) => {
            console.log(err)
          })
      })
    },
    //季销售额
    getDateMoney(context, val) {
      return new Promise((resolve, reject) => {
        dateMoneyApi(val)
          .then((res) => {
            if (res.data.status === 200) {
              context.commit('setDateMoney', res.data.data)
              resolve()
            }
          })
          .catch((err) => {
            console.log(err)
          })
      })
    },
    //季订单数
    getOrderNumber(context, val) {
      return new Promise((resolve, reject) => {
        orderNumberApi(val)
          .then((res) => {
            if (res.data.status === 200) {
              context.commit('setOrderNumber', res.data.data)
              resolve()
            }
          })
          .catch((err) => {
            console.log(err)
          })
      })
    }
  }
}
