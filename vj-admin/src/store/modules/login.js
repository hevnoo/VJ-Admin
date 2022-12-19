import { loginApi, registerApi, menuList } from '@/api/login'
import router from '@/router'
//引入过期时间设置
import { setTokenTime } from '@/utils/auth'
import storage from '@/utils/storage'
import { ElMessage } from 'element-plus'
export default {
  namespaced: true,
  state: {
    token: storage.getItem('token') || '',
    mark: storage.getItem('mark') || '',
    menuList: storage.getItem('menuList') || []
  },
  getters: {},
  mutations: {
    setToken(state, val) {
      state.token = val
      storage.setItem('token', val)
    },
    setMark(state, val) {
      state.mark = val
      storage.setItem('mark', val)
    },
    menuList(state, val) {
      state.menuList = val
      storage.setItem('menuList', val)
    }
  },
  actions: {
    //获取菜单列表
    getMenuList(context, val) {
      return new Promise((resolve, reject) => {
        menuList(val)
          .then((res) => {
            if (res.data.status === 200) {
              // console.log('获取menu成功', res.data)
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
              console.log('登录成功action:', res)
              context.commit('setMark', res.data.mark.user_mark)
              context.commit('setToken', res.data.token)
              setTokenTime()
              setTimeout(() => {
                router.replace('/')
              }, 500)
              resolve() //resolve可不要,因为promise只是用来修饰异步。
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
              console.log('注册成功', res.data.msg)
              ElMessage.success(res.data.msg)
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
      storage.removeItem('token')
      commit('setMark', '')
      storage.removeItem('mark')
      commit('menuList', [])
      storage.removeItem('menuList')
      storage.removeItem('tokenTime')
      // storage.setItem('menuList', [])
      storage.removeItem_s('name')
      storage.setItem('lang', 'zh')
      router.replace('/login')
    }
  }
}
