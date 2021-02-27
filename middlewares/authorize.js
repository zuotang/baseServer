const jwt = require("jwt-simple");
const koaJwt = require("koa-jwt");

//秘钥
const jwtSecret = "wysj3910";
const tokenExpiresTime = 1000 * 60 * 60 * 24 * 7;

async function authorize(ctx, next) {
  ctx.getUser = async function () {
    let { name } = jwt.decode(ctx.cookies.get("token"), jwtSecret);
    let user = await ctx.sqlOne("SELECT * FROM user WHERE name=?", [name]);
    return user;
  };
  ctx.setLogin = function ({ id, name }) {
    ctx.cookies.set("uid", id);
    let payload = {
      exp: Date.now() + tokenExpiresTime,
      name: name,
    };
    const token = jwt.encode(payload, jwtSecret);
    ctx.cookies.set("name", name, {
      maxAge: tokenExpiresTime,
    });
    ctx.cookies.set("token", token, {
      maxAge: tokenExpiresTime,
    });
    return { name, token };
  };

  try {
    await next();
  } catch (err) {
    console.log(err);
    if (err.name === "UnauthorizedError") {
      ctx.body = {
        status: 1,
        message: err.message || "未登录!",
      };
    }
  }
}

let auth = koaJwt({
  secret: jwtSecret,
  credentialsRequired: true,
  getToken: (ctx) => ctx.cookies.get("token"),
});

let user = async function (ctx, next) {
  let user = await ctx.getUser();
  ctx.user = user;
  await next();
};

let admin = async function (ctx, next) {
  let user = await ctx.getUser();
  ctx.user = user;
  if (user.role !== "admin") {
    ctx.throw(401, "需要管理员权限!");
  } else {
    await next();
  }
};

module.exports = {
  auth,
  admin,
  user,
  authorize,
};
