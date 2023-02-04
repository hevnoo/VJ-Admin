import storage from '@/utils/storage'
export default {
  //控制项目开关，true or false.以及分页器当前页
  namespaced: true,
  state: {
    isClose: false,
    //分页
    total: 0,
    pageSize: 10,
    currentPage: storage.getItem_s('page') || 1
  },
  getters: {},
  actions: {},
  mutations: {
    //改变menu收缩关闭
    change(state, val) {
      state.isClose = val
    },
    //分页改变
    changePage(state, val) {
      storage.setItem_s('page', val)
      state.currentPage = val
    }
  }
}
