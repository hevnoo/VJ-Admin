import { addUserApi, getUserApi, upUserApi, deleUserApi } from '@/api/userList'
import router from '@/router'
import storage from '@/utils/storage'
import { ElMessage } from 'element-plus'
export default {
  namespaced: true,
  state: {
    userList: []
  },
  getters: {},
  mutations: {
    setUserList(state, val) {
      state.userList = val
    }
  },
  actions: {
    //获取菜单列表
    getUser(context, val) {
      return new Promise((resolve, reject) => {
        getUserApi(val)
          .then((res) => {
            if (res.data.status === 200) {
              context.commit('setUserList', res.data.data)
              resolve()
            }
          })
          .catch((err) => {
            console.log(err)
          })
      })
    },
    //新增用户/注册
    addUser(context, val) {
      return new Promise((resolve, reject) => {
        addUserApi(val)
          .then((res) => {
            if (res.data.status === 200) {
              ElMessage.success(res.data.msg)
              //请求完整数据
              getUserApi().then((res) => {
                if (res.data.status === 200) {
                  context.commit('setUserList', res.data.data)
                }
              })
              resolve()
            } else if (res.data.status === 400) {
              ElMessage.error(res.date.msg)
              reject()
            }
          })
          .catch((err) => {
            console.log(err)
          })
      })
    },
    //更新用户信息
    upUser(context, val) {
      return new Promise((resolve, reject) => {
        upUserApi(val)
          .then((res) => {
            if (res.data.status === 200) {
              ElMessage.success(res.data.msg)
              //请求完整数据
              getUserApi().then((res) => {
                if (res.data.status === 200) {
                  context.commit('setUserList', res.data.data)
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
    //删除用户
    deleUser(context, val) {
      return new Promise((resolve, reject) => {
        deleUserApi(val)
          .then((res) => {
            if (res.data.status === 200) {
              ElMessage.success(res.data.msg)
              //请求完整数据
              getUserApi().then((res) => {
                if (res.data.status === 200) {
                  context.commit('setUserList', res.data.data)
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
