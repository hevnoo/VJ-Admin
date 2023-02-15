import request from '@/utils/request'

// export const login = (data) => {
//   return request({
//     url: 'api/users/login',
//     method: 'POST',
//     data
//   })
// }
const loginApi = (data) => {
  return request({
    url: 'api/users/login',
    method: 'POST',
    data
  })
}
const registerApi = (data) => {
  return request({
    url: 'api/users/register',
    method: 'POST',
    data
  })
}
const menuList = (data) => {
  return request({
    url: 'api/users/menuList',
    params: { role: data }
  })
  //get请求传参，值要写在属性后面，还要把属性要写成与后端接收属性一样的！
}
//导出多个
export { loginApi, registerApi, menuList }
