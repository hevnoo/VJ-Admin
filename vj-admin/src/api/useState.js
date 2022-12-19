// import { mapState, useStore } from 'vuex'
// import { computed } from 'vue'

// export default function (mapper) {
//   const store = useStore()
//   // {nickname：function；age：function}
//   const storeStsteFns = mapState(mapper)
//   const storeState = {}
//   Object.keys(storeStsteFns).forEach((item) => {
//     // 给函数绑定this
//     const fn = storeStsteFns[item].bind({ $store: store })
//     // 在computed中获取mapstate是通过this.$store.state方式获取
//     storeState[item] = computed(fn)
//   })
//   return storeState
// }
