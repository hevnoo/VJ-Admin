var express = require('express');
var router = express.Router();
const querySql = require('../db/index')


//增加用户列表
router.post('/addUserList', async(req, res, next) => {
    let {head_img,nickname,usernames} = req.body
    let { username } = req.user
    try {
        let user = await querySql('select * from userList where username = ?', [username])
        if (!user || user.length === 0) {
            let sql = 'insert into userList(head_img,nickname,username) values(?,?,?)'
            await querySql(sql, [head_img,nickname,username])
            res.send({ code: 0, msg: '新增成功', data: null })
        }else{
            res.send({ code: -1, msg: '该账号已注册' })
        }   
    } catch (e) {
        console.log(e)
        next(e)
    }
});
//获取用户列表
router.get('/userList', async(req, res, next) => {
    try {
        let sql = 'select id,head_img,nickname,username from userList'
        let result = await querySql(sql)
        res.send({ code: 0, msg: '获取成功', data: result })
    } catch (e) {
        console.log(e)
        next(e)
    }
});
//更新用户列表信息接口
router.post('/upUserList', async(req, res, next) => {
    let {head_img,nickname} = req.body
    let { username } = req.user
    try {
        let sql = 'update userList set head_img=?,nickname=? where username=?'
        let result = await querySql(sql, [head_img,nickname,username])
        res.send({ code: 0, msg: '更新成功', data: null })
    } catch (e) {
        console.log(e)
        next(e)
    }
});



module.exports = router;