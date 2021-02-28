const Koa = require("koa");
const Router = require("@koa/router");
const serve = require("koa-static");
const range = require("koa-range");
const koaBody = require("koa-body");
var path = require("path");
var fs = require("fs");
const file = require("./routes/file");
//const post = require("./routes/post");
const user = require("./routes/user");
const shop = require("./routes/shop");
const web = require("./routes/web");

const db = require("./middlewares/db");
const authorize = require("./middlewares/authorize");
var cors = require("koa2-cors");

const app = new Koa();
const router = new Router();

// app.on("error", (err, next) => {
//   console.error("server error", err);
// });

db(app);
app.use(
  cors({
    origin: function (ctx) {
      if (ctx.url === "/test") {
        return "*"; // 允许来自所有域名请求
      }
      return ctx.headers.origin; // 这样就能只允许 http://localhost:8080 这个域名的请求了
    },
    exposeHeaders: ["WWW-Authenticate", "Server-Authorization"],
    maxAge: 5,
    credentials: true,
    allowMethods: ["GET", "POST", "DELETE"],
    allowHeaders: ["Content-Type", "Authorization", "Accept"],
  })
);
app.use(range);
app.use(authorize.authorize);
app.use(serve("./static", { gzip: true, maxage: 0 /* 1000 * 60 * 60 * 24 * 30*/ }));
app.use(
  koaBody({
    multipart: true, // 支持文件上传
    formidable: {
      maxFieldsSize: 10000 * 1024 * 1024, // 最大文件为10G
      multipart: true, // 是否支持 multipart-formdate 的表单
    },
  })
);

router.use("/file", file.routes());
//router.use("/post", post.routes());
router.use("/user", user.routes());
router.use("/shop", shop.routes());
router.use("/web", web.routes());
function readHtml(htmlPath) {
  return new Promise((resolve, reject) => {
    fs.readFile(htmlPath, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data.toString());
      }
    });
  });
}

//显示客户端首页
router.get("/", async (ctx, next) => {
  console.log(await ctx.sql("SELECT * FROM user"));
  let htmlStr = await readHtml(__dirname + "/static/client/index.html");
  ctx.body = htmlStr;
});

//显示管理系统
router.get("/admin", async (ctx, next) => {
  let htmlStr = await readHtml(__dirname + "/static/admin/index.html");
  ctx.body = htmlStr;
});

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(80);
