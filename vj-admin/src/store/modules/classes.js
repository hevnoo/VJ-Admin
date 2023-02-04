import {
  addClassApi,
  allClassApi,
  upClassApi,
  deleClassApi
} from '@/api/classes'
import router from '@/router'
import storage from '@/utils/storage'
import { ElMessage } from 'element-plus'

export default {
  namespaced: true,
  state: {
    classList: []
  },
  getters: {},
  mutations: {
    setAllClass(state, val) {
      state.classList = val
    }
  },
  actions: {
    //添加分类
    addClass(context, val) {
      return new Promise((resolve, reject) => {
        addClassApi(val)
          .then((res) => {
            if (res.data.status === 200) {
              ElMessage.success(res.data.msg)
              //添加之后再请求完整数据
              allClassApi().then((res) => {
                if (res.data.status === 200) {
                  context.commit('setAllClass', res.data.data)
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
    //获取分类列表
    getClass(context, val) {
      return new Promise((resolve, reject) => {
        allClassApi(val)
          .then((res) => {
            if (res.data.status === 200) {
              context.commit('setAllClass', res.data.data)
              resolve()
            }
          })
          .catch((err) => {
            console.log(err)
          })
      })
    },
    //更新分类
    upClass(context, val) {
      return new Promise((resolve, reject) => {
        upClassApi(val)
          .then((res) => {
            if (res.data.status === 200) {
              ElMessage.success(res.data.msg)
              //更新之后再请求完整数据
              allClassApi().then((res) => {
                if (res.data.status === 200) {
                  context.commit('setAllClass', res.data.data)
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
    //删除分类
    deleClass(context, val) {
      return new Promise((resolve, reject) => {
        deleClassApi(val)
          .then((res) => {
            if (res.data.status === 200) {
              ElMessage.success(res.data.msg)
              //删除之后再请求完整数据
              allClassApi().then((res) => {
                if (res.data.status === 200) {
                  context.commit('setAllClass', res.data.data)
                }
              })
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
