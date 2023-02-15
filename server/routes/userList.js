var express = require("express");
var router = express.Router();
const querySql = require("../db/index");

//增加用户列表
router.post("/addUser", async (req, res, next) => {
  let { username, password, nickname, role } = req.body;
  try {
    let user = await querySql("select * from users where username = ?", [
      username,
    ]);
    if (!user || user.length === 0) {
      if (username === "admin" || role === "admin") {
        let role = "admin";
        let sql =
          "insert into users(username,password,nickname,role) values(?,?,?,?)";
        await querySql(sql, [username, password, nickname, role]);
        res.send({ status: 200, msg: "新增成功", data: null });
      }
      //   else if (role === "admin") {
      //     let sql =
      //       "insert into users(username,password,nickname,role) values(?,?,?,?)";
      //     await querySql(sql, [username, password, nickname, role]);
      //     res.send({ status: 200, msg: "新增成功", data: null });
      //   }
      else {
        let role = "vip";
        let sql =
          "insert into users(username,password,nickname,role) values(?,?,?,?)";
        await querySql(sql, [username, password, nickname, role]);
        res.send({ status: 200, msg: "新增成功", data: null });
      }
    } else {
      res.send({ status: 400, msg: "该用户已存在" });
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
});
//获取用户列表
router.get("/getUser", async (req, res, next) => {
  try {
    let sql = "select * from users";
    let result = await querySql(sql);
    res.send({ status: 200, msg: "获取成功", data: result });
  } catch (e) {
    console.log(e);
    next(e);
  }
});
//更新用户列表信息接口
router.post("/upUser", async (req, res, next) => {
  let { username, password, nickname, role } = req.body;
  try {
    let user = await querySql("select * from users where username = ?", [
      username,
    ]);
    if (username === "admin" || role === "admin") {
      let role = "admin";
      let sql =
        "update users set nickname=?,password=?,role=? where username=?";
      let result = await querySql(sql, [nickname, password, role, username]);
      res.send({ status: 200, msg: "更新成功", data: null });
    }

    // if (!user || user.length === 0) {
    //   let sql = "update users set nickname=?,password=? where username=?";
    //   let result = await querySql(sql, [nickname, password, username]);
    //   res.send({ status: 200, msg: "更新成功", data: null });
    // } else {
    //   res.send({ status: 400, msg: "该用户已存在" });
    // }
  } catch (e) {
    console.log(e);
    next(e);
  }
});
//删除用户
router.post("/deleUser", async (req, res, next) => {
  let { id } = req.body;
  try {
    let sql = "delete from users where id = ? ";
    let result = await querySql(sql, [id]);
    res.send({ status: 200, msg: "删除成功", data: null });
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
