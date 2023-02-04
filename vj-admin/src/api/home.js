import request from '@/utils/request'

//获取订单总数
const AllOrdersApi = (data) => {
  return request({
    url: 'api/home/AllOrders'
  })
}
//获取商品总数
const AllGoodsApi = (data) => {
  return request({
    url: 'api/home/AllGoods'
  })
}
//获取销售额
const moneyApi = (data) => {
  return request({
    url: 'api/home/money'
  })
}
//获取类别总数
const AllClassesApi = (data) => {
  return request({
    url: 'api/home/AllClasses'
  })
}
//季销售额
const dateMoneyApi = (data) => {
  return request({
    url: 'api/home/dateMoney'
    // params: { date: data }
  })
}
//获取每季度订单数
const orderNumberApi = (data) => {
  return request({
    url: 'api/home/orderNumber'
  })
}

export {
  AllOrdersApi,
  AllGoodsApi,
  moneyApi,
  AllClassesApi,
  dateMoneyApi,
  orderNumberApi
}
