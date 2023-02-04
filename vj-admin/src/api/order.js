import request from '@/utils/request'

//添加订单
const addOrdersApi = (data) => {
  return request({
    url: 'api/orders/addOrders',
    method: 'POST',
    data
  })
}

//获取订单列表，分页
const getOrdersApi = (data) => {
  return request({
    url: 'api/orders/getOrders',
    params: { page: data }
  })
}

//搜索订单列表，分页
const searchOrdersApi = (data) => {
  const { page, clientName } = data
  return request({
    url: 'api/orders/searchOrders',
    params: { page, clientName }
  })
}

//更新订单
const upOrdersApi = (data) => {
  return request({
    url: 'api/orders/upOrders',
    method: 'POST',
    data: data
  })
}

//删除
const deleOrdersApi = (data) => {
  return request({
    url: 'api/orders/deleOrders',
    method: 'POST',
    data
    //post传一个数据要注意是一个对象！比如data={id:xx}
  })
}
//库存stock
const stockApi = (data) => {
  return request({
    url: 'api/orders/stock',
    params: { goodsName: data }
  })
}
//与订单响应的库存更新。
const upStockApi = (data) => {
  return request({
    url: 'api/orders/upStock',
    method: 'POST',
    data: data
  })
}
//汇总清单
const getCollectApi = (data) => {
  return request({
    url: 'api/orders/collect',
    params: { page: data }
  })
}

export {
  addOrdersApi,
  getOrdersApi,
  searchOrdersApi,
  upOrdersApi,
  deleOrdersApi,
  stockApi,
  upStockApi,
  getCollectApi
}
