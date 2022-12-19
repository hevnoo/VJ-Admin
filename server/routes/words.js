var express = require('express');
var router = express.Router();
const querySql = require('../db/index')


//发表留言接口
router.post('/addWords',async(req,res,next) => {
  let {words} = req.body
  let {username} = req.user
  try {
    let userSql = 'select id,head_img,nickname from user where username = ?'
    let user = await querySql(userSql,[username])
    let {id:user_id,head_img,nickname} = user[0]
    let sql = 'insert into words(user_id,words,nickname,head_img,create_time) values(?,?,?,?,NOW())'
    let result = await querySql(sql,[user_id,words,nickname,head_img])
    res.send({code:0,msg:'发表成功',data:null})
  }catch(e){
    console.log(e)
    next(e)
  } 
})
//发表回复接口
router.post('/addReWords',async(req,res,next) => {
  let {words,father_words_id,to_user_id,to_user_nickname} = req.body
  let {username} = req.user
  try {
    let userSql = 'select id,head_img,nickname from user where username = ?'
    let user = await querySql(userSql,[username])
    let {id:user_id,head_img,nickname} = user[0]
    let sql = 'insert into words(user_id,words,nickname,head_img,father_words_id,to_user_id,to_user_nickname,create_time) values(?,?,?,?,?,?,?,NOW())'
    let result = await querySql(sql,[user_id,words,nickname,head_img,father_words_id,to_user_id,to_user_nickname])
    res.send({code:0,msg:'发表成功',data:null})
  }catch(e){
    console.log(e)
    next(e)
  } 
})

//获取留言列表接口
router.get('/wordsList',async(req,res,next) => {
    try {
      //先按本身id排序(id)，再按父级id排序(father_words_id)。
      let sql = 'select id,head_img,nickname,words,father_words_id,to_user_id,to_user_nickname,DATE_FORMAT(create_time,"%Y-%m-%d %H:%i:%s") AS create_time from words order by id asc'
      // let sql = 'select * from words'
      // let father = 'select id,head_img,nickname,words,father_words_id,to_user_id,to_user_nickname,DATE_FORMAT(create_time,"%Y-%m-%d %H:%i:%s") AS create_time from words where father_words_id = 0'
      // let son = 'select id,head_img,nickname,words,father_words_id,to_user_id,to_user_nickname,DATE_FORMAT(create_time,"%Y-%m-%d %H:%i:%s") AS create_time from words where father_words_id is != 0 order by id asc'
      let result = await querySql(sql)
      res.send({code:0,msg:'成功',data:result})
    }catch(e){
      console.log(e)
      next(e)
    } 
})


//test:获取父级----------------------------------------------------
// router.get('/fList',async(req,res,next) => {
//   try {
//     let sql = 'select id,head_img,nickname,words,father_words_id,to_user_id,to_user_nickname,DATE_FORMAT(create_time,"%Y-%m-%d %H:%i:%s") AS create_time from words where father_words_id is null'
//     let result = await querySql(sql)
//     res.send({code:0,msg:'成功',data:result})
//   }catch(e){
//     console.log(e)
//     next(e)
//   } 
// })
// //test:子级------------------------------------------------------
// router.get('/sList',async(req,res,next) => {
//   try {
//     let sql = 'select id,head_img,nickname,words,father_words_id,to_user_id,to_user_nickname,DATE_FORMAT(create_time,"%Y-%m-%d %H:%i:%s") AS create_time from words where father_words_id is not null'
//     let result = await querySql(sql)
//     res.send({code:0,msg:'成功',data:result})
//   }catch(e){
//     console.log(e)
//     next(e)
//   } 
// })


module.exports = router;
