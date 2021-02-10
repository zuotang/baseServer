const Router = require("@koa/router");
const { getPostList, whereHandle, pugFun,getQueryString } = require("../utils");
const router = new Router();

router.get("/signin", async (ctx, next) => {
  return await ctx.render("user/signin", { ...pugFun, ...ctx.commonRender, title: "登录" });
});
router.post("/signin", async (ctx, next) => {
  let { name, password } = ctx.request.body;
  let les = await ctx.sql("SELECT * FROM user WHERE name=? AND password=?", [name, password]);
  if (les.length > 0) {
    ctx.body = "登录成功";
    ctx.response.redirect("/");
  } else {
    ctx.body = "账号密码错误";
  }
});

router.get("/top", async (ctx, next) => {
  let { page = 0, page_size = 40 } = ctx.request.query;
  page = +page;
  let start = page * page_size;
  //获取所有用户
  let { num } = await ctx.sqlOne("SELECT count(id) as num FROM user WHERE top > 0");
  let totalPage = Math.ceil(num / page_size);
  let users = await ctx.sql("SELECT * FROM user WHERE top > 0 ORDER BY top DESC limit ?,?", [start, +page_size]);
  users = await Promise.all(
    users.map(async (user) => {
      let { num } = await ctx.sqlOne("SELECT count(id) as num FROM post WHERE uid=?", [user.id]);
      user.post_num = num;
      return user;
    })
  );
  let querystring=getQueryString(ctx,'page');
  return ctx.render("userList", { ...pugFun, ...ctx.commonRender, title: "用户TOP", users, page, totalPage, total: num, path: ctx.path,querystring });
});

router.get("/list", async (ctx, next) => {
  let startTime=+new Date();
  let { page = 0, page_size = 40, search } = ctx.request.query;
  page = +page;
  let start = page * page_size;

  let whereObj = whereHandle();
  whereObj.and(search && `nickname LIKE  '\%${search}\%'`);
  whereObj.or(search && `name LIKE  '\%${search}\%'`);
  where = whereObj.toString();

  //获取所有用户
  let { num } = await ctx.sqlOne("SELECT count(id) as num FROM user ");
  let totalPage = Math.ceil(num / page_size);
  let users = await ctx.sql(`SELECT * FROM user ${where} ORDER BY id DESC limit ?,?`, [start, +page_size]);

  // users = await Promise.all(
  //   users.map(async (user) => {
  //     let { num } = await ctx.sqlOne("SELECT count(id) as num FROM post WHERE uid=?", [user.id]);
  //     user.post_num = num;
  //     return user;
  //   })
  // );

  let querystring=getQueryString(ctx,'page');
  let endTIme=+new Date()
  console.log(endTIme,endTIme-startTime)
  return ctx.render("userList", { ...pugFun, ...ctx.commonRender, title: "用户列表", users, page, totalPage, total: num, path: ctx.path,querystring });
});

router.get("/updates", async (ctx, next) => {
  let { page = 0, page_size = 40, search } = ctx.request.query;
  page = +page;
  let start = page * page_size;

  let whereObj = whereHandle();
  whereObj.and(` isupdate=1 `);
  whereObj.and(search && `nickname LIKE  '\%${search}\%'`);
  where = whereObj.toString();

  //获取所有用户
  let { num } = await ctx.sqlOne("SELECT count(id) as num FROM user ");
  let totalPage = Math.ceil(num / page_size);
  let users = await ctx.sql(`SELECT * FROM user ${where} ORDER BY id DESC limit ?,?`, [start, +page_size]);
  users = await Promise.all(
    users.map(async (user) => {
      let { num } = await ctx.sqlOne("SELECT count(id) as num FROM post WHERE uid=?", [user.id]);
      user.post_num = num;
      return user;
    })
  );
  let querystring=getQueryString(ctx,'page');
  return ctx.render("userList", { ...pugFun, ...ctx.commonRender, title: "更新列表", users, page, totalPage, total: num, path: ctx.path,querystring });
});

//添加update
router.get("/addupdate/:id", async (ctx, next) => {
  let id = ctx.params.id;
  await ctx.sqlOne("UPDATE user set isupdate=1 WHERE id=?", [id]);
  await ctx.redirect(ctx.request.header["referer"]);
});

//删除update
router.get("/delupdate/:id", async (ctx, next) => {
  let id = ctx.params.id;
  await ctx.sqlOne("UPDATE user set isupdate=0 WHERE id=?", [id]);
  await ctx.redirect(ctx.request.header["referer"]);
});

//添加top
router.get("/addtop/:id", async (ctx, next) => {
  let id = ctx.params.id;
  await ctx.sqlOne("UPDATE user as p set p.top=p.top+1 WHERE id=?", [id]);
  await ctx.redirect(ctx.request.header["referer"]);
});

//删除top
router.get("/deltop/:id", async (ctx, next) => {
  let id = ctx.params.id;
  await ctx.sqlOne("UPDATE user as p set p.top=0 WHERE id=?", [id]);
  await ctx.redirect(ctx.request.header["referer"]);
});

router.get("/:id", async (ctx, next) => {
  let { id } = ctx.params;
  //获取用户
  let user = await ctx.sqlOne("SELECT * FROM user WHERE id=?", [id]);

  let postNumRes = await ctx.sqlOne("SELECT count(id) as num FROM post WHERE status=0 and uid=?", [id]);
  user.post_num = postNumRes["num"];
  ctx.request.query.sort = "pubdate";
  let posts = await getPostList({ ctx, uid: id });

  return ctx.render("user", { ...pugFun, ...ctx.commonRender, title: "用户详情", user, ...posts });
});

module.exports = router;
