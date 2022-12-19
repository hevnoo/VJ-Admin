import request from '@/utils/request'
//停用，，转移到login.js文件里了
export const menuList = () => {
  return request({
    url: 'api/users/menuList'
  })
}
