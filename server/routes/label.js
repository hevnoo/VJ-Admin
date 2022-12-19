var express = require('express');
var router = express.Router();
const querySql = require('../db/index')

//这些标签接口只是影响编写文章时的标签选择内容而已。

//新增标签接口
router.post('/addLabel', async(req, res, next) => {
    let { label } = req.body
    // let { username } = req.user
    try {
        let sql = 'insert into label(label) value(?)'
        await querySql(sql, [label])
        res.send({ code: 0, msg: '新增成功', data: null })
    } catch (e) {
        console.log(e)
        next(e)
    }
});

// 获取所有标签接口
router.get('/allLabel', async(req, res, next) => {
    try {
        let sql = 'select id,label from label'
        let result = await querySql(sql)
        res.send({ code: 0, msg: '获取成功', data: result })
    } catch (e) {
        console.log(e)
        next(e)
    }
});

//删除标签接口
router.post('/deLabel', async(req, res, next) => {
    let { label_id } = req.body
    try {
        let sql = 'delete from label where id = ? '
        let result = await querySql(sql, [label_id])
        res.send({ code: 0, msg: '删除成功', data: null })
    } catch (e) {
        console.log(e)
        next(e)
    }
});




//初始标签接口
// router.post('/theLabel', async(req, res, next) => {
//     try {
//         let sql = 'insert into label(label) value(?)'
//         // let sql = 'select id,label from label'
//         let result = await querySql(sql,['前端'])
//         res.send({ code: 0, msg: '获取成功', data: result })
//     } catch (e) {
//         console.log(e)
//         next(e)
//     }
// });



module.exports = router;
