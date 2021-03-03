const Router = require("@koa/router");
const { auth, admin } = require("../middlewares/authorize");
const router = new Router();

router.get("/shop/:id", async (ctx, next) => {
  let { id } = ctx.params;
  let tableData = await ctx.sqlOne("SELECT * FROM shop WHERE id=?", [id]);
  tableData.photo = await ctx.sql("SELECT * FROM shop_photo WHERE sid=?", [id]);
  tableData.attr = await ctx.sql("SELECT * FROM shop_attr WHERE sid=?", [id]);

  ctx.body = {
    status: 0,
    data: tableData,
  };
});

router.get("/list", async (ctx, next) => {
  let { status = 0, keyword = "", page = 0, page_size = 10 } = ctx.request.query;
  //分页
  page = +page;
  page_size = +page_size;
  let start = page * page_size;
  let where = keyword ? `and name LIKE '%${keyword}%'` : "";
  let { num } = await ctx.sqlOne(`SELECT count(id) as num FROM shop WHERE status=? ${where}`, [status]);
  let sqlStr = `SELECT * FROM shop WHERE status=? ${where} ORDER BY ?? DESC limit  ?,?`;
  let tableData = await ctx.sql(sqlStr, [status, "id", start, page_size]);

  for (let item of tableData) {
    let id = item.id;
    item.photo = await ctx.sql("SELECT * FROM shop_photo WHERE sid=?", [id]);
    item.attr = await ctx.sql("SELECT * FROM shop_attr WHERE sid=?", [id]);
    let { attr_num } = await ctx.sqlOne("SELECT sum(value) as attr_num FROM shop_attr WHERE sid=?", [id]);
    item.attr_num = attr_num;
  }
  let total_page = Math.ceil(num / page_size) - 1;
  ctx.body = {
    status: 0,
    data: {
      list: tableData,
      page: page,
      page_size: page_size,
      total_page,
    },
  };
});

router.post("/attr/edit", async (ctx, next) => {
  let { id, name, value } = ctx.request.body;
  await ctx.sql("UPDATE shop_attr SET `name`=?,value=? WHERE id=?", [name, value, id]);
  ctx.body = {
    status: 0,
    data: id,
  };
});

router.post("/add", auth, admin, async (ctx, next) => {
  let { name, attr = [], photo = [], price, proxy_name, proxy_price, brand } = ctx.request.body;
  let addTime = new Date();
  //添加主体
  let { insertId: id } = await ctx.sql("INSERT INTO shop (name,proxy_name,price,proxy_price,brand,add_time) VALUES (?,?,?,?,?,?)", [
    name,
    proxy_name,
    price,
    proxy_price,
    brand,
    addTime,
  ]);

  //添加附加
  photo.map(async (item) => {
    await ctx.sqlOne("INSERT INTO shop_photo (sid,url) VALUES (?,?)", [id, item.url]);
  });
  attr.map(async (item) => {
    await ctx.sqlOne("INSERT INTO shop_attr (sid,name,value) VALUES (?,?,?)", [id, item.name, item.value]);
  });
  ctx.body = {
    status: 0,
    data: id,
  };
});

router.post("/status", auth, admin, async (ctx, next) => {
  let { id, status } = ctx.request.body;
  //添加主体
  let res = await ctx.sql("UPDATE shop SET `status`=? WHERE id=?", [status, id]);
  ctx.body = {
    status: 0,
    message: "操作成功!",
  };
});

router.post("/edit", auth, admin, async (ctx, next) => {
  let { id, name, attr = [], photo = [], price, proxy_name, proxy_price, brand } = ctx.request.body;
  //更新主体
  await ctx.sql("UPDATE shop SET `name`=?,proxy_name=?,price=?,proxy_price=?,brand=? WHERE id=?", [name, proxy_name, price, proxy_price, brand, id]);

  //删除
  await ctx.sql("DELETE FROM shop_photo WHERE sid=?", [id]);
  await ctx.sql("DELETE FROM shop_attr WHERE sid=?", [id]);
  //添加附加
  photo.map(async (item) => {
    await ctx.sqlOne("INSERT INTO shop_photo (sid,url) VALUES (?,?)", [id, item.url]);
  });
  attr.map(async (item) => {
    await ctx.sqlOne("INSERT INTO shop_attr (sid,name,value) VALUES (?,?,?)", [id, item.name, item.value]);
  });

  ctx.body = {
    status: 0,
    data: id,
  };
});

module.exports = router;
