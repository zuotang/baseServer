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
module.exports = router;
