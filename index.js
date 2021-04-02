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
const compress = require("koa-compress");

const app = new Koa();
const router = new Router();

// app.on("error", (err, next) => {
//   console.error("server error", err);
// });

//GZIP
app.use(
  compress({
    threshold: 2048, //数据超过1kb时压缩
    gzip: {
      flush: require("zlib").constants.Z_SYNC_FLUSH,
    },
    deflate: {
      flush: require("zlib").constants.Z_SYNC_FLUSH,
    },
    br: false, // disable brotli
  })
);

db(app);
app.use(
  cors({
    origin: function (ctx) {
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

app.use(serve("./static", { gzip: false, maxage: 1000 * 60 * 10 })); //十分钟缓存
app.use(
  koaBody({
    multipart: true, // 支持文件上传
    formidable: {
      maxFieldsSize: 10000 * 1024 * 1024, // 最大文件为10G
      multipart: true, // 是否支持 multipart-formdate 的表单
    },
  })
);

//二级域名处理 添加servername
app.use(async function (ctx, next) {
  let hostnames = ctx.hostname.split(".");
  if (hostnames.length >= 3) {
    ctx.servername = hostnames[0];
  } else {
    ctx.servername = "www";
  }
  let res = await ctx.sqlOne("SELECT id FROM client WHERE name=?", [ctx.servername]);
  ctx.cid = res ? res.id : 1;
  await next();
});

router.use("/file", file.routes());
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
