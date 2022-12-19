import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('@/views/login/index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue')
      },
      {
        path: '/goods',
        name: 'goods',
        component: () => import('@/views/goods/index.vue'),
        children: [
          {
            path: '/goods/goodsList',
            name: 'goods-list',
            component: () => import('@/views/goods/goodsList/index.vue')
          },
          {
            path: '/goods/category',
            name: 'category',
            component: () => import('@/views/goods/category/index.vue')
          }
        ]
      },
      {
        path: '/orders',
        name: 'orders',
        component: () => import('@/views/orders/index.vue'),
        children: [
          {
            path: '/orders/orderList',
            name: 'orders-list',
            component: () => import('@/views/orders/orderList/index.vue')
          },
          {
            path: '/orders/collect',
            name: 'collect',
            component: () => import('@/views/orders/collect/index.vue')
          },
          {
            path: '/orders/auditing',
            name: 'auditing',
            component: () => import('@/views/orders/auditing/index.vue')
          }
        ]
      },
      {
        path: '/system',
        name: 'system',
        component: () => import('@/views/system/index.vue'),
        children: [
          {
            path: '/system/roles',
            name: 'roles',
            component: () => import('@/views/system/roles/index.vue')
          },
          {
            path: '/system/department',
            name: 'department',
            component: () => import('@/views/system/department/index.vue')
          }
        ]
      },
      {
        path: '/personal',
        name: 'personal',
        component: () => import('@/views/personal/index.vue')
      }
    ]
  },

  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/Test.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// menuList.map((m) => {
//   const { path, name, meta } = m
//   const item = {
//     path,
//     name,
//     meta
//   }
//   menusMap[m.id] = item
//   if (m.children) {
//     m.children.map((s) => {
//       const { path, name, meta } = s
//       const items = {
//         path,
//         name,
//         meta
//       }
//       menusMap[m.id].children[s.id] = items
//     })
//   }
// })
// 将生成数组树结构的菜单并拼接404路由
// const route1 = Object.values(menusMap).concat(notFoundRoutes)
// console.log(menuList)
// router.addRoute({
//   path: '/404',
//   name: '404',
//   component: () => import('@/views/404')
// })
export default router
