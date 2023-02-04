var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
//
const cors = require("cors");
const expressJWT = require("express-jwt");
const { PRIVATE_KEY } = require("./utils/constant");
//
var usersRouter = require("./routes/users");
var goodsRouter = require("./routes/goods");
var classRouter = require("./routes/class");
var ordersRouter = require("./routes/orders");
var homeRouter = require("./routes/home");
// var commentRouter = require("./routes/comment");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// 部署dist文件至public
app.use(express.static(path.join(__dirname, "public")));

app.use(
  expressJWT({
    secret: PRIVATE_KEY,
  }).unless({
    path: [
      "/api/users/menuList",
      "/api/users/register",
      "/api/users/login",
      "/api/goods/upImg",
    ],
    //白名单,除了这里写的地址，其他的URL都需要验证
  })
);

app.use("/api/users", usersRouter);
app.use("/api/goods", goodsRouter);
app.use("/api/class", classRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/home", homeRouter);
// app.use("/api/comment", commentRouter);

//--------------------------
// 捕获404并转发到错误处理程序
app.use(function (req, res, next) {
  next(createError(404));
});
//捕获解析jwt后产生的错误 error handler
app.use(function (err, req, res, next) {
  console.log(err);
  if (err.name === "UnauthorizedError") {
    //  这个需要根据自己的业务逻辑来处理
    res.status(401).send({ code: -1, msg: "token验证失败" });
  } else {
    // 设置局部变量，仅在开发中提供错误
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // 呈现错误页
    res.status(err.status || 500);
    res.render("error");
  }
});
//------------------------

app.listen(7171, () => {
  // 监听7171端口
  console.log("服务已启动 http://localhost:7171");
});

module.exports = app;
