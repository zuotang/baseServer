const Router = require("@koa/router");
const { auth, admin } = require("../middlewares/authorize");
const router = new Router();

router.get("/list", async (ctx, next) => {
  let configs = await ctx.sql("SELECT * FROM web WHERE cid=? ORDER BY `order` DESC", [ctx.cid]);
  ctx.body = {
    status: 0,
    data: configs,
  };
});

router.get("/config", async (ctx, next) => {
  let configs = await ctx.sql("SELECT * FROM web WHERE cid=? ORDER BY `order` DESC", [ctx.cid]);
  let res = {};
  for (let item of configs) {
    res[item.name] = item.value;
  }
  ctx.body = {
    status: 0,
    data: res,
  };
});
router.post("/add", auth, admin, async (ctx, next) => {
  let { name, value, note } = ctx.request.body;
  let { insertId: id } = await ctx.sql("INSERT INTO web (name,value,note,cid) VALUES (?,?,?,?)", [name, value, note, ctx.cid]);
  ctx.body = {
    status: 0,
    data: id,
  };
});

router.post("/edit", auth, admin, async (ctx, next) => {
  let { id, name, value, note, cid } = ctx.request.body;
  let res = await ctx.sqlOne("UPDATE web SET `name`=?,value=?,note=?,cid=? WHERE id=?", [name, value, note, cid, id]);
  ctx.body = {
    status: 0,
    data: res,
  };
});

//新的商城
router.get("/newshop/:name", auth, admin, async (ctx, next) => {
  let { name } = ctx.params;
  let { insertId: id } = await ctx.sql("INSERT INTO client (name) VALUES (?)", [name]);
  await ctx.sql("INSERT INTO `web` (`name`,`value`,type,note,`column`,`order`,cid) VALUES ('title', 'New Shop', 'String', '网站标题', 'web', 100, ?)", [id]);
  await ctx.sql("INSERT INTO `web` (`name`,`value`,type,note,`column`,`order`,cid) VALUES ('logo', '/upload/2021-03-05/1614937637997_3490.ico', 'Image', '', 'web', 99, ?)", [id]);
  await ctx.sql("INSERT INTO `web` (`name`,`value`,type,note,`column`,`order`,cid) VALUES ('recordnumber', '湘ICP备2021003382', 'String', '备案号', 'web', 97, ?)", [id]);
  await ctx.sql(
    "INSERT INTO `web` (`name`,`value`,type,note,`column`,`order`,cid) VALUES ('icon', '/upload/2021-03-05/1614937645420_3848.ico', 'Image', '网页icon', 'web', 98, ?)",
    [id]
  );
  await ctx.sql("INSERT INTO `web` (`name`,`value`,type,note,`column`,`order`,cid) VALUES ('recordlink', 'https://beian.miit.gov.cn/', 'String', '备案链接', 'web', 97, ?)", [id]);
  ctx.body = {
    status: 0,
    data: "成功",
  };
});

module.exports = router;
