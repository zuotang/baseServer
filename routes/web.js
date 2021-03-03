const Router = require("@koa/router");
const router = new Router();

router.get("/list", async (ctx, next) => {
  let configs = await ctx.sql("SELECT * FROM web");
  console.log(configs);
  ctx.body = {
    status: 0,
    data: configs,
  };
});

router.get("/config", async (ctx, next) => {
  let configs = await ctx.sql("SELECT * FROM web");
  console.log(configs);
  let res = {};
  for (let item of configs) {
    res[item.name] = item.value;
  }
  ctx.body = {
    status: 0,
    data: res,
  };
});
router.post("/add", async (ctx, next) => {
  let { name, value, note } = ctx.request.body;
  let { insertId: id } = await ctx.sql("INSERT INTO web (name,value,note) VALUES (?,?,?)", [name, value, note]);
  ctx.body = {
    status: 0,
    data: id,
  };
});

router.post("/edit", async (ctx, next) => {
  let { id, name, value, note } = ctx.request.body;
  let res = await ctx.sqlOne("UPDATE web SET `name`=?,value=?,note=? WHERE id=?", [name, value, note, id]);
  ctx.body = {
    status: 0,
    data: res,
  };
});

module.exports = router;
