import { createStore } from 'vuex'
import login from '@/store/modules/login'
import keys from '@/store/modules/keys'
import appSwitch from '@/store/modules/appSwitch'
import goods from '@/store/modules/goods'
import classes from '@/store/modules/classes'
import order from '@/store/modules/order'
import home from '@/store/modules/home'
import userList from '@/store/modules/userList'

export default createStore({
  state: {},
  mutations: {},
  actions: {},

  modules: {
    login,
    keys,
    appSwitch,
    goods,
    classes,
    order,
    home,
    userList
  }
})
