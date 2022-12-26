import router from './index'
import store from '@/store/index'
import addRoute from '@/router/addRoute'
import { ref, computed, watch } from 'vue'

const whiteList = ['/login']
var isRoute = []
//刷新后会初始化，那么isRoute就又是空的
//如果为空，判断为刷新，就重新添加路由，防止刷新路由丢失！
router.beforeEach((to, from, next) => {
  if (store.state.login.token) {
    if (to.path === '/login') {
      //去的还是login的话自动跳到'/'，防止一直在login
      next('/')
    } else {
      if (isRoute.length !== 0) {
        //如果不为空，就是普通的跳转，并没有刷新
        // console.log('跳转路由')
        if (to.path === '/wait') {
          next('/home')
        } else {
          next()
        }
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

        //判断是否是首页前的wait页面，/wait用来代替动态的/home
        if (to.path === '/wait') {
          next('/home')
        } else {
          next()
        }
        //
      }
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
