import {
  addGoodsApi,
  goodsListApi,
  goodsListIdApi,
  searchApi,
  updateGoodsApi,
  deleteGoodsApi
} from '@/api/goods'
import router from '@/router'
import storage from '@/utils/storage'
import { ElMessage } from 'element-plus'

export default {
  namespaced: true,
  state: {
    goodsList: [],
    total: 0,
    pageSize: 1,
    currentPage: storage.getItem_s('goodsPage') || 1,
    goodsListId: []
  },
  getters: {},
  mutations: {
    setGoodsList(state, val) {
      state.goodsList = val.data
      state.total = val.total
      state.pageSize = val.pageSize
    },
    changePage(state, val) {
      storage.setItem_s('goodsPage', val)
      state.currentPage = val
    },
    // searchGoods(state, val) {
    //   state.goodsList = val.data
    //   state.total = val.total
    //   state.pageSize = val.pageSize
    // },
    setGoodsListId(state, val) {
      state.goodsListId = val
    }
  },
  actions: {
    //获取商品列表,可分页
    getGoodsList(context, val) {
      return new Promise((resolve, reject) => {
        goodsListApi(val)
          .then((res) => {
            if (res.data.status === 200) {
              //   console.log('商品列表', res.data.data)
              context.commit('setGoodsList', res.data)
              resolve()
            }
          })
          .catch((err) => {
            console.log(err)
          })
      })
    },
    //获取搜索商品列表,可分页
    getSearchGoods(context, val) {
      return new Promise((resolve, reject) => {
        searchApi(val)
          .then((res) => {
            if (res.data.status === 200) {
              context.commit('setGoodsList', res.data)
              ElMessage.success(res.data.msg)
              resolve()
            }
          })
          .catch((err) => {
            console.log(err)
          })
      })
    },
    //获取对应ID商品列表，编辑按钮
    getGoodsListId(context, val) {
      return new Promise((resolve, reject) => {
        goodsListIdApi(val)
          .then((res) => {
            if (res.data.status === 200) {
              //   console.log('商品列表', res.data.data)
              context.commit('setGoodsListId', res.data.data)
              resolve()
            }
          })
          .catch((err) => {
            console.log(err)
          })
      })
    },
    //添加商品
    addGoods(context, val) {
      return new Promise((resolve, reject) => {
        addGoodsApi(val)
          .then((res) => {
            if (res.data.status === 200) {
              //   console.log('添加商品', res)
              ElMessage.success(res.data.msg)
              resolve()
            }
          })
          .catch((err) => {
            console.log(err)
          })
      })
    },
    //更新商品
    updateGoods(context, val) {
      return new Promise((resolve, reject) => {
        updateGoodsApi(val)
          .then((res) => {
            if (res.data.status === 200) {
              //   console.log(res.data.msg)
              ElMessage.success(res.data.msg)
              resolve()
            }
          })
          .catch((err) => {
            console.log(err)
          })
      })
    },
    //删除商品
    deleteGoods(context, val) {
      return new Promise((resolve, reject) => {
        deleteGoodsApi(val)
          .then((res) => {
            if (res.data.status === 200) {
              //   console.log(res.data.msg)
              ElMessage.success(res.data.msg)
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
