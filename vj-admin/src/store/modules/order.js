import {
  addOrdersApi,
  getOrdersApi,
  searchOrdersApi,
  upOrdersApi,
  deleOrdersApi,
  stockApi,
  upStockApi,
  getCollectApi
} from '@/api/order'
import router from '@/router'
import storage from '@/utils/storage'
import { ElMessage } from 'element-plus'

export default {
  namespaced: true,
  state: {
    orderList: [],
    total: 0,
    pageSize: 1,
    stock: 0,
    collectList: [], //汇总清单
    manageList: []
  },
  getters: {},
  mutations: {
    setOrder(state, val) {
      //   state.orderList = val
      state.orderList = val.data
      state.total = val.total
      state.pageSize = val.pageSize
    },
    setStock(state, val) {
      state.stock = val
    },
    setCollect(state, val) {
      state.collectList = val.data
      state.total = val.total
      state.pageSize = val.pageSize
    },
    setManage(state, val) {
      state.manageList = val.data
      state.total = val.total
      state.pageSize = val.pageSize
    }
  },
  actions: {
    //添加订单
    addOrder(context, val) {
      return new Promise((resolve, reject) => {
        addOrdersApi(val)
          .then((res) => {
            if (res.data.status === 200) {
              ElMessage.success(res.data.msg)
              //添加之后再请求完整数据,分页
              getOrdersApi().then((res) => {
                if (res.data.status === 200) {
                  context.commit('setOrder', res.data)
                }
              })
              resolve()
            }
          })
          .catch((err) => {
            console.log(err)
          })
      })
    },
    //获取订单列表，分页
    getOrder(context, val) {
      return new Promise((resolve, reject) => {
        getOrdersApi(val)
          .then((res) => {
            if (res.data.status === 200) {
              context.commit('setOrder', res.data)
              resolve()
            }
          })
          .catch((err) => {
            console.log(err)
          })
      })
    },
    //获取搜索订单列表,分页
    getSearchOrder(context, val) {
      return new Promise((resolve, reject) => {
        searchOrdersApi(val)
          .then((res) => {
            if (res.data.status === 200) {
              context.commit('setOrder', res.data)
              ElMessage.success(res.data.msg)
              resolve()
            }
          })
          .catch((err) => {
            console.log(err)
          })
      })
    },
    //更新订单
    upOrder(context, val) {
      return new Promise((resolve, reject) => {
        upOrdersApi(val)
          .then((res) => {
            if (res.data.status === 200) {
              ElMessage.success(res.data.msg)
              //更新之后再请求完整数据
              getOrdersApi().then((res) => {
                if (res.data.status === 200) {
                  context.commit('setOrder', res.data)
                }
              })
              resolve()
            }
          })
          .catch((err) => {
            console.log(err)
          })
      })
    },
    //删除订单
    deleOrder(context, val) {
      return new Promise((resolve, reject) => {
        deleOrdersApi(val)
          .then((res) => {
            if (res.data.status === 200) {
              ElMessage.success(res.data.msg)
              //删除之后再请求完整数据
              getOrdersApi().then((res) => {
                if (res.data.status === 200) {
                  context.commit('setOrder', res.data)
                }
              })
              resolve()
            }
          })
          .catch((err) => {
            console.log(err)
          })
      })
    },
    //库存stock
    getStock(context, val) {
      return new Promise((resolve, reject) => {
        stockApi(val).then((res) => {
          if (res.data.status === 200) {
            context.commit('setStock', res.data.data)
            // console.log(res.data.data)
            resolve()
          }
        })
      })
    },
    //与订单响应的库存更新。
    upStock(context, val) {
      return new Promise((resolve, reject) => {
        upStockApi(val)
          .then((res) => {
            if (res.data.status === 200) {
              // ElMessage.success(res.data.msg)
              resolve()
            }
          })
          .catch((err) => {
            console.log(err)
          })
      })
    },
    //汇总清单
    getCollect(context, val) {
      return new Promise((resolve, reject) => {
        getCollectApi(val)
          .then((res) => {
            if (res.data.status === 200) {
              context.commit('setCollect', res.data)
              resolve()
            }
          })
          .catch((err) => {
            console.log(err)
          })
      })
    },
    //出货清单，模块管理的分类管理。
    getManage(context, val) {
      return new Promise((resolve, reject) => {
        getCollectApi(val)
          .then((res) => {
            if (res.data.status === 200) {
              context.commit('setManage', res.data)
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
