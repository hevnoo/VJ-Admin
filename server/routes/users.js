var express = require("express");
var router = express.Router();
const querySql = require("../db/index");
const { PWD_SALT, PRIVATE_KEY, EXPIRESD } = require("../utils/constant");
const { md5, upload } = require("../utils/index");
// 用于生成jwt字符串
const jwt = require("jsonwebtoken");
// const menuList = require("../data/menuList.json");
//引入身份标识与对应的展示内容
const rolesList = require("../login/data/rolesList.json");
// const adminLogin = require("../login/data/admin_login.json");
// const vipLogin = require("../login/data/vip_login.json");
const adminPermission = require("../login/data/admin_permission.json");
const vipPermission = require("../login/data/vip_permission.json");

// 获取菜单列表
router.get("/menuList", (req, res, next) => {
  let role = req.query.role;
  // let menu = menuList;
  try {
    if (role === "admin") {
      res.send({ status: 200, msg: "admin成功", data: adminPermission });
    } else {
      res.send({ status: 200, msg: "vip成功", data: vipPermission });
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
});

// 登录接口
router.post("/login", async (req, res, next) => {
  let { username, password } = req.body;
  try {
    let user = await querySql("select * from users where username = ?", [
      username,
    ]);
    if (!user || user.length === 0) {
      res.send({ status: 400, msg: "该账号不存在" });
    } else {
      let roles = await querySql("select role from users where username = ?", [
        username,
      ]);
      let role = roles[0].role;
      // console.log("------------------", roles[0].role);
      let result = await querySql(
        "select * from users where username = ? and password = ?",
        [username, password]
      );
      if (!result || result.length === 0) {
        res.send({ status: 400, msg: "账号或者密码不正确" });
      } else {
        // 调用jsonwebtoken包提供的sign()方法，将用户信息加密成字符串，并响应给客户端！
        let token = jwt.sign({ username }, PRIVATE_KEY, {
          expiresIn: EXPIRESD,
        });
        if (username === "admin" || role === "admin") {
          //分权限，如果是admin，那就发送admin的标识，，否则发普通vip标识。
          res.send({
            status: 200,
            msg: "登录成功",
            token: token,
            role: role,
          });
        } else {
          res.send({
            status: 200,
            msg: "登录成功",
            token,
            role,
          });
        }
      }
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
});

/* 注册接口 */
router.post("/register", async (req, res, next) => {
  let { username, password, nickname } = req.body;
  try {
    let user = await querySql("select * from users where username = ?", [
      username,
    ]);
    // 问号占位符，后面既是赋值给占位符。
    if (!user || user.length === 0) {
      if (username === "admin") {
        //账号或者角色 是管理员admin即可
        let role = "admin";
        await querySql(
          "insert into users(username,password,nickname,role) value(?,?,?,?)",
          [username, password, nickname, role]
        );
      } else {
        let role = "vip";
        await querySql(
          "insert into users(username,password,nickname,role) value(?,?,?,?)",
          [username, password, nickname, role]
        );
      }

      res.send({ status: 200, msg: "注册成功" });
    } else {
      res.send({ status: 400, msg: "该账号已注册" });
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
});

//获取用户信息接口
router.get("/info", async (req, res, next) => {
  console.log("用户信息：", req.user);
  let { username } = req.user;
  try {
    //按用户名查找出对应的用户信息：
    let userinfo = await querySql(
      "select nickname,head_img,username from users where username = ?",
      [username]
    );
    res.send({ status: 200, msg: "成功", data: userinfo[0] });
  } catch (e) {
    console.log(e);
    next(e);
  }
});

//头像上传接口
router.post("/upload", upload.single("head_img"), async (req, res, next) => {
  console.log("头像接口请求文件", req.file);
  let imgPath = req.file.path.split("public")[1];
  let imgUrl = "http://127.0.0.1:3000" + imgPath;
  res.send({ status: 200, msg: "上传成功", data: imgUrl });
});

//用户信息更新接口
router.post("/updateUser", async (req, res, next) => {
  let { nickname, head_img } = req.body;
  let { username } = req.user;
  try {
    let result = await querySql(
      "update users set nickname = ?,head_img = ? where username = ?",
      [nickname, head_img, username]
    );
    console.log(result);
    res.send({ status: 200, msg: "更新成功", data: null });
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
