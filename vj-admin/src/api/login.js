import request from '@/utils/request'

// export const login = (data) => {
//   return request({
//     url: 'api/users/login',
//     method: 'POST',
//     data
//   })
// }
//登录
const loginApi = (data) => {
  return request({
    url: 'api/users/login',
    method: 'POST',
    data
  })
}
//注册
const registerApi = (data) => {
  return request({
    url: 'api/users/register',
    method: 'POST',
    data
  })
}
//获取动态路由菜单
const menuList = (data) => {
  return request({
    url: 'api/users/menuList',
    params: { role: data }
  })
  //get请求传参，值要写在属性后面，还要把属性要写成与后端接收属性一样的！
}
//获取用户信息
const userInfoApi = (data) => {
  return request({
    url: 'api/users/info'
  })
}
//更新用户信息
const updateUserApi = (data) => {
  return request({
    url: 'api/users/updateUser',
    method: 'POST',
    data
  })
}
//导出多个
export { loginApi, registerApi, menuList, userInfoApi, updateUserApi }
