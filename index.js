const Koa = require("koa");
const Router = require("@koa/router");
const serve = require("koa-static");
const range = require("koa-range");
const koaBody = require("koa-body");
const initMysql = require("./db");
const views = require("koa-views");
var path = require("path");
//var ps = require("ps-node");
const file = require("./routes/file");
const post = require("./routes/post");
const user = require("./routes/user");
var cors = require("koa2-cors");

const { upLoadFile, getPostList, pugFun, dayFormat } = require("./utils");

const app = new Koa();
const router = new Router();

app.on("error", (err, next) => {
  console.error("server error", err);
});

initMysql(app);
app.use(cors());
app.use(range);
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

//json和渲染
app.use(async function (ctx, next) {
  if (ctx.request.query.format == "json") {
    ctx.render = function (title, options) {
      ctx.body = options;
    };
    let startTime = +new Date();
    let res = await next();
    console.log(+new Date() - startTime);
  } else {
    return views(path.join(__dirname, "views"), { extension: "pug" })(ctx, next);
  }
});

router.post("/nodeedit", async (ctx, next) => {
  let sql = ctx.request.body.sql;
  let rc = ctx.request.body.text;
  if (!rc && ctx.request.files.img) {
    rc = (await upLoadFile(ctx.request.files.img)).url;
  }
  let res = await ctx.sql(sql, [rc]);
  ctx.body = { code: 0, data: rc };
});

app.use(async (ctx, next) => {
  if (ctx.request.query.format !== "json") {
    let updateUser = await ctx.sql("select * from user where isupdate=1  order by last_updated desc limit 0,6");
    let topPost = await ctx.sql("select p.*,u.name,u.nickname,u.avatar FROM post p LEFT JOIN user u on p.uid=u.id  where p.status=0 and p.top>0  order by p.update desc limit 0,6");
    topPost = await Promise.all(
      topPost.map(async (post) => {
        let photos = await ctx.sql("SELECT src,width,height FROM photo WHERE pid=?", [post.id]);
        post.photos = photos;
        post.pubdate = dayFormat(post.pubdate);
        return post;
      })
    );
    ctx.commonRender = {
      topPost,
      updateUser,
    };
  }
  await next();
});

router.use("/file", file.routes());
router.use("/post", post.routes());

router.use("/user", user.routes());

router.get("/", async (ctx, next) => {
  //let banner = await ctx.sql("select * from banner");
  let updateUser = await ctx.sql("select * from user where isupdate=1  order by last_updated desc limit 0,6");
  let topPost = await ctx.sql("select p.*,u.name,u.nickname,u.avatar FROM post p LEFT JOIN user u on p.uid=u.id  where p.status=0 and p.top>0  order by p.update desc limit 0,6");
  topPost = await Promise.all(
    topPost.map(async (post) => {
      let photos = await ctx.sql("SELECT src FROM photo WHERE pid=?", [post.id]);
      post.photos = photos;
      post.pubdate = dayFormat(post.pubdate);
      return post;
    })
  );
  function getRandomPage(totalPage) {
    return Math.ceil(Math.random() * totalPage);
  }
  //当前参数没有page时获取随机页面
  let { num } = await ctx.sqlOne(`SELECT count(id) as num FROM post WHERE status = 0`);
  let page_size = ctx.request.query.page_size || 20;
  let totalPage = parseInt(num / page_size);
  let currentRandom = ctx.request.query.page || getRandomPage(totalPage);

  let posts = await getPostList({ ctx, query: { sort: "pubdate", page: currentRandom } });
  let randomPage = getRandomPage(posts.totalPage);

  return ctx.render("index", { ...pugFun, ...ctx.commonRender, title: "首页", updateUser, topPost, ...posts, path: ctx.path, randomPage, test: () => "asdf" });
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3001);
