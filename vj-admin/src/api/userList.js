import request from '@/utils/request'

//增加用户列表
const addUserApi = (data) => {
  return request({
    url: 'api/userList/addUser',
    method: 'POST',
    data
  })
}
//获取用户列表
const getUserApi = (data) => {
  return request({
    url: 'api/userList/getUser'
  })
}
//更新用户列表信息接口
const upUserApi = (data) => {
  return request({
    url: 'api/userList/upUser',
    method: 'POST',
    data
  })
}
//删除用户
const deleUserApi = (data) => {
  return request({
    url: 'api/userList/deleUser',
    method: 'POST',
    data
  })
}

export { addUserApi, getUserApi, upUserApi, deleUserApi }
