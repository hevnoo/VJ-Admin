import request from '@/utils/request'

//添加商品
const addGoodsApi = (data) => {
  return request({
    url: 'api/goods/addGoods',
    method: 'POST',
    data
  })
}
//获取商品列表,可分页
const goodsListApi = (data) => {
  return request({
    url: 'api/goods/goodsList',
    params: { page: data }
  })
}
//获取对应ID商品列表，编辑按钮
const goodsListIdApi = (data) => {
  return request({
    url: 'api/goods/goodsListId',
    params: { id: data.value }
  })
}
//获取搜索商品
const searchApi = (data) => {
  const { date, goodsName, goodsClass, page } = data
  return request({
    url: 'api/goods/searchGoods',
    params: {
      date,
      goodsName,
      goodsClass,
      page
    }
  })
}
//更新商品信息
const updateGoodsApi = (data) => {
  return request({
    url: 'api/goods/updateGoods',
    method: 'POST',
    data: data
  })
}
//删除商品
const deleteGoodsApi = (data) => {
  return request({
    url: 'api/goods/deleteGoods',
    method: 'POST',
    data
    //post传一个数据要注意是一个对象！比如data={id:xx}
  })
}
//上传图片
const upImgApi = () => {
  return request({
    url: 'api/goods/upImg',
    method: 'POST'
  })
}

export {
  addGoodsApi,
  goodsListApi,
  goodsListIdApi,
  searchApi,
  updateGoodsApi,
  deleteGoodsApi,
  upImgApi
}
