import request from '@/utils/request'

//添加类别
const addClassApi = (data) => {
  return request({
    url: 'api/class/addClass',
    method: 'POST',
    data
  })
}

//获取所有类别
const allClassApi = (data) => {
  return request({
    url: 'api/class/allClass'
    //   params: { page: data }
  })
}

//更新类别
const upClassApi = (data) => {
  return request({
    url: 'api/class/upClass',
    method: 'POST',
    data: data
  })
}

//删除类别
const deleClassApi = (data) => {
  return request({
    url: 'api/class/deleClass',
    method: 'POST',
    data
    //post传一个数据要注意是一个对象！比如data={id:xx}
  })
}

export { addClassApi, allClassApi, upClassApi, deleClassApi }
