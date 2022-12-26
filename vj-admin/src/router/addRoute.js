//抽离失败
import router from './index'
import store from '@/store/index'
export function addRoute(menuList) {
  if (menuList !== []) {
    menuList.map((m) => {
      const { path, name, component, meta } = m
      const item = {
        path: path,
        name: name,
        component: () => import(`@/views${component}`),
        meta: meta
      }
      // console.log(item)
      router.addRoute('layout', item)
      //向layout添加子路由！
      if (m.children) {
        m.children.map((s) => {
          const { path, name, component, meta } = s
          const res = {
            path,
            name,
            component: () => import(`@/views${component}`),
            meta
          }
          router.addRoute(`${m.name}`, res)
          //向父级添加子路由！
        })
      }
    })
    //下拉菜单路由
    const dropRoutes = [
      {
        path: '/personal',
        name: 'personal',
        component: () => import('@/views/personal/index.vue')
      }
    ]
    dropRoutes.map((m) => {
      router.addRoute('layout', m)
    })
    // 404路由,放在最后添加
    const notFoundRoutes = [
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/404/index.vue')
      },
      { path: '/:pathMatch(.*)*', redirect: '/404' }
    ]
    notFoundRoutes.map((n) => {
      if (menuList !== []) {
        router.addRoute(n)
      }
    })
  } else {
    console.log('菜单不能为空')
  }
}
