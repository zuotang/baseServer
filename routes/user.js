const Router = require("@koa/router");
const md5 = require("blueimp-md5");
const { auth } = require("../middlewares/authorize");
const router = new Router();

router.post("/signin", async (ctx, next) => {
  let { name, password } = ctx.request.body;
  let user = await ctx.sqlOne("SELECT * FROM user WHERE name=? AND password=?", [name, md5(password)]);
  console.log(user);
  if (user) {
    console.log(user.id);
    let signinUser = ctx.setLogin({ id: user.id, name: user.name });
    ctx.body = { status: 0, message: "登录成功!", data: signinUser };
  } else {
    ctx.body = { status: 1, message: "账号或密码错误!" };
  }
});

router.post("/signup", async (ctx, next) => {
  console.log(ctx.request.body);
  let { name, password, confirm_password } = ctx.request.body;
  if (password != confirm_password) {
    ctx.body = { status: 2, message: "密码确认不一致" };
    return;
  }
  let user = await ctx.sqlOne("SELECT * FROM user WHERE name=?", [name]);
  if (user) {
    ctx.body = { status: 3, message: "账号已被注册" };
    return;
  }
  let res = await ctx.sql("INSERT INTO user (name,password) VALUES (?,?)", [name, md5(password)]);
  if (res.insertId) {
    ctx.body = { status: 0, message: "注册成功" };
  } else {
    ctx.body = { status: 4, message: "注册失败" };
  }
});

router.get("/info", auth, async (ctx, next) => {
  let user = await ctx.getUser();
  let res = { ...user };
  delete res.password;
  ctx.body = { status: 0, data: res };
});

module.exports = router;
