import {
  loginApi,
  registerApi,
  menuList,
  userInfoApi,
  updateUserApi
} from '@/api/login'
import router from '@/router'
//引入过期时间设置
import { setTokenTime } from '@/utils/auth'
import storage from '@/utils/storage'
import { ElMessage } from 'element-plus'
export default {
  namespaced: true,
  state: {
    token: storage.getItem('token') || '',
    role: storage.getItem('role') || '',
    menuList: storage.getItem('menuList') || [],
    userInfo: null
  },
  getters: {},
  mutations: {
    setToken(state, val) {
      state.token = val
      storage.setItem('token', val)
    },
    setRole(state, val) {
      state.role = val
      storage.setItem('role', val)
    },
    menuList(state, val) {
      state.menuList = val
      storage.setItem('menuList', val)
      router.replace('/')
    },
    setUserInfo(state, val) {
      state.userInfo = val
    }
  },
  actions: {
    //获取菜单列表
    getMenuList(context, val) {
      return new Promise((resolve, reject) => {
        menuList(val)
          .then((res) => {
            if (res.data.status === 200) {
              context.commit('menuList', res.data.data)
              resolve()
            }
          })
          .catch((err) => {
            console.log(err)
          })
      })
    },
    //登录接口
    login(context, val) {
      return new Promise((resolve, reject) => {
        loginApi(val)
          .then((res) => {
            if (res.data.status === 200) {
              context.commit('setRole', res.data.role)
              context.commit('setToken', res.data.token)
              resolve()
              //登录接口时自动请求对应的菜单
              menuList(res.data.role)
                .then((res) => {
                  if (res.data.status === 200) {
                    context.commit('menuList', res.data.data)
                  }
                })
                .catch((err) => {
                  console.log(err)
                })
              //
              setTokenTime()
              // router.replace('/')
              resolve()
            } else {
              console.log('登录失败', res.data.msg)
            }
          })
          .catch((err) => {
            console.log(err)
          })
      })
    },
    //注册接口
    register(context, val) {
      return new Promise((resolve, reject) => {
        registerApi(val)
          .then((res) => {
            if (res.data.status === 200) {
              ElMessage.success(res.data.msg)
            }
          })
          .catch((err) => {
            console.log(err)
          })
      })
    },
    //获取用户信息
    userInfo(context, val) {
      return new Promise((resolve, reject) => {
        userInfoApi(val)
          .then((res) => {
            if (res.data.status === 200) {
              context.commit('setUserInfo', res.data.data)
              resolve()
            }
          })
          .catch((err) => {
            console.log(err)
          })
      })
    },
    //更新当前用户信息
    updateUser(context, val) {
      return new Promise((resolve, reject) => {
        updateUserApi(val)
          .then((res) => {
            if (res.data.status === 200) {
              ElMessage.success(res.data.msg)
              resolve()
            }
          })
          .catch((err) => {
            console.log(err)
          })
      })
    },
    // 退出
    logout({ commit }) {
      commit('setToken', '')
      commit('setRole', '')
      commit('menuList', [])
      localStorage.clear()
      //清空所有
      sessionStorage.clear()
      storage.setItem('lang', 'zh')
      router.replace('/login')
    }
  }
}
