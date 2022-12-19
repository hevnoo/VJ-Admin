//停用，，被后端传过来的数据代替！
import {
  HomeFilled,
  Goods,
  Document,
  List,
  Grid,
  Tickets,
  Filter,
  Menu,
  Setting,
  UserFilled,
  OfficeBuilding
} from '@element-plus/icons-vue'
import { ref, reactive } from 'vue'

export function getMenuList() {
  const menuList = [
    {
      id: 0,
      name: '首页',
      path: '/home',
      langName: 'home',
      icon: HomeFilled
    },
    {
      id: 1,
      name: '产品管理',
      path: '/goods',
      langName: 'goods',
      icon: Goods,
      children: [
        {
          id: 1 - 1,
          name: '产品列表',
          path: '/goods/goodsList',
          langName: 'goodsList',
          icon: List
        },
        {
          id: 1 - 2,
          name: '产品分类',
          path: '/goods/category',
          langName: 'category',
          icon: Grid
        }
      ]
    },
    {
      id: 2,
      name: '订单管理',
      path: '/orders',
      langName: 'orders',
      icon: Document,
      children: [
        {
          id: 2 - 1,
          name: '订单列表',
          path: '/orders/orderList',
          langName: 'orderList',
          icon: List
        },
        {
          id: 2 - 2,
          name: '汇总清单',
          path: '/orders/collect',
          langName: 'collect',
          icon: Tickets
        },
        {
          id: 2 - 3,
          name: '订单审核',
          path: '/orders/auditing',
          langName: 'auditing',
          icon: Filter
        }
      ]
    },
    {
      id: 3,
      name: '产品分类',
      path: '/class',
      langName: 'class',
      icon: Menu,
      children: [
        {
          id: 3 - 1,
          name: '产品列表',
          path: '/class/list',
          langName: 'list',
          icon: List
        },
        {
          id: 3 - 2,
          name: '分类管理',
          path: '/class/manage',
          langName: 'manage',
          icon: Grid
        }
      ]
    },
    {
      id: 4,
      name: '系统管理',
      path: '/system',
      langName: 'system',
      icon: Setting,
      children: [
        {
          id: 4 - 1,
          name: '角色管理',
          path: '/system/roles',
          langName: 'roles',
          icon: UserFilled
        },
        {
          id: 4 - 2,
          name: '部门管理',
          path: '/system/department',
          langName: 'department',
          icon: OfficeBuilding
        }
      ]
    }
  ]
  return menuList
}
