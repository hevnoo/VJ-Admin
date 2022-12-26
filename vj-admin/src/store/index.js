import { createStore } from 'vuex'
import login from '@/store/modules/login'
import getters from '@/store/modules/getters'
import keys from '@/store/modules/keys'
import appSwitch from '@/store/modules/appSwitch'
import goods from '@/store/modules/goods'

export default createStore({
  state: {},
  mutations: {},
  actions: {},

  modules: {
    login,
    getters,
    keys,
    appSwitch,
    goods
  }
})
