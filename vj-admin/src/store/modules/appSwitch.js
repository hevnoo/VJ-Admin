export default {
  //控制项目开关，true or false.
  namespaced: true,
  state: {
    isClose: false
  },
  getters: {},
  actions: {},
  mutations: {
    //改变menu收缩关闭
    change(state, val) {
      state.isClose = val
    }
  }
}
