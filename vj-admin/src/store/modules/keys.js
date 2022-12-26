export default {
  //改变key值，刷新组件.
  namespaced: true,
  state: {
    breadKeys: 1,
    menuKeys: 1,
    dialogKeys: 1
  },
  getters: {},
  actions: {},
  mutations: {
    changeBreadKeys(state, val) {
      //这里的key值由Headers去控制Bread组件的刷新，从而读取storage。
      state.breadKeys = ++val
    },
    changeMenuKeys(state, val) {
      //menu
      state.menuKeys = ++val
    },
    changeDialogKeys(state, val) {
      //menu
      state.dialogKeys = ++val
    }
  }
}
