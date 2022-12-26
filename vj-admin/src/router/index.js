import { createRouter, createWebHashHistory } from 'vue-router'
import store from '@/store'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('@/layout/index.vue'),
    redirect: '/wait',
    children: [
      {
        path: '/wait',
        name: 'wait',
        component: () => import('@/views/404/wait/index.vue')
      }
    ]
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/Test.vue'),
    // component: (resolve) => require(['@/views/Test.vue'], resolve),
    meta: {
      title: '测试'
    }
  }
  //动态添加
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

var isRoute = []
if (isRoute.length !== 0) {
  //如果不为空，就是普通的跳转，并没有刷新
  // 防止刷新路由丢失，这个判断在permission.js里无法正确执行，所以在本文件里也写一个
  // console.log('index:跳转路由')
} else {
  isRoute = ['menuList']
  const menuList = store.state.login.menuList
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
  //后加上
}
//
//添加路由写在全局守卫里，防止页面加载时路由还未添加！！！
// router.addRoute({
//   path: '/',
//   name: 'layout',
//   component: () => import('@/layout/index.vue'),
//   redirect: '/home'
// })
// component: (resolve) => require([`@/views${component}`], resolve),
export default router
