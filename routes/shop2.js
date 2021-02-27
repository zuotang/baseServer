const Router = require("@koa/router");
const { auth, admin } = require("../middlewares/authorize");
const router = new Router();

function handleModel(tableModel, list, attrs) {
  Object.keys(tableModel).map((key) => {
    let item = tableModel[key];
    //附加项
    if (typeof item === "object") {
      let attr = {
        [key]: [],
        attrs: [],
      };
      attrs.push(attr);
      return handleModel(item, attr[key], attr.attrs);
    }
    list.push(key);
  });
}

function handleTable(tableName, tableModel) {
  let subject = [];
  let attrs = [];
  handleModel(tableModel, subject, attrs);
  async function handleAttrTables(callback) {
    for (let item of attrs) {
      for (let [attrExt, keys] of Object.entries(item)) {
        if (attrExt !== "attrs") {
          let table = tableName + "_" + attrExt;
          await callback(attrExt, table, keys);
        }
      }
    }
  }

  router.get("/list", async (ctx, next) => {
    let { status = 0, keyword = "", page = 0, page_size = 20 } = ctx.request.query;
    //分页
    page = +page;
    page_size = +page_size;
    let start = page * page_size;
    let where = keyword ? `and name LIKE '%${keyword}%'` : "";
    let { num } = await ctx.sqlOne(`SELECT count(id) as num FROM ${tableName} WHERE status=? ${where}`, [status]);
    let sqlStr = `SELECT * FROM ${tableName} WHERE status=? ${where} ORDER BY ?? DESC limit  ?,?`;
    let tableData = await ctx.sql(sqlStr, [status, "id", start, page_size]);

    for (let item of tableData) {
      let id = item.id;
      await handleAttrTables(async (attrExt, table, keys) => {
        let idKey = keys[0];
        item[attrExt] = await ctx.sql(`SELECT * FROM ${table} WHERE ${idKey}=?`, [id]);
      });
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

  function formatKyeToSql(keys, data) {
    let keyStr = keys.join(",");
    let sizeSeat = Array.from(new Array(keys.length), (v) => "?").join(",");
    let values = keys.map((key) => data[key]);
    return {
      keyStr,
      sizeSeat,
      values,
    };
  }

  router.post("/add", auth, admin, async (ctx, next) => {
    let addTime = new Date();
    let subjectSql = formatKyeToSql(subject, ctx.request.body);
    //添加主体
    let { insertId: id } = await ctx.sql(`INSERT INTO shop (${subjectSql.keyStr},add_time) VALUES (${subjectSql.sizeSeat},?)`, [...subjectSql.values, addTime]);

    await handleAttrTables(async (attrExt, table, keys) => {
      let idKey = keys[0];
      let attrs = ctx.request.body[attrExt] || [];
      attrs.map(async (item) => {
        let attrSql = formatKyeToSql(keys, { ...item, [idKey]: id });
        await ctx.sqlOne(`INSERT INTO ${table} (${attrSql.keyStr}) VALUES (${attrSql.sizeSeat})`, attrSql.values);
      });
    });

    ctx.body = {
      status: 0,
      data: id,
    };
  });

  router.post("/status", auth, admin, async (ctx, next) => {
    let { id, status } = ctx.request.body;
    //添加主体
    let res = await ctx.sql(`UPDATE ${tableName} SET status=? WHERE id=?`, [status, id]);
    ctx.body = {
      status: 0,
      message: "操作成功!",
    };
  });

  router.post("/edit", auth, admin, async (ctx, next) => {
    let { id, name, attr = [], photo = [], price, proxy_name, proxy_price } = ctx.request.body;
    let values = subject.map((key) => ctx.request.body[key]);
    let setStr = subject.join("=?,") + "=?";
    //更新主体
    await ctx.sql(`UPDATE ${tableName} SET ${setStr} WHERE id=?`, [...values, id]);
    await handleAttrTables(async (attrExt, table, keys) => {
      let idKey = keys[0];
      await ctx.sql(`DELETE FROM ${table} WHERE ${idKey}=?`, [id]);
      let attrs = ctx.request.body[attrExt] || [];
      attrs.map(async (item) => {
        let attrSql = formatKyeToSql(keys, { ...item, [idKey]: id });
        await ctx.sqlOne(`INSERT INTO ${table} (${attrSql.keyStr}) VALUES (${attrSql.sizeSeat})`, attrSql.values);
      });
    });
    ctx.body = {
      status: 0,
      data: id,
    };
  });

  router.get(`/${tableName}/:id`, async (ctx, next) => {
    let { id } = ctx.params;
    let tableData = await ctx.sqlOne(`SELECT * FROM ${tableName} WHERE id=?`, [id]);
    await handleAttrTables(async (attrExt, attrName, keys) => {
      let idKey = keys[0];
      tableData[attrExt] = await ctx.sql(`SELECT * FROM ${attrName} WHERE ${idKey}=?`, [id]);
    });
    ctx.body = {
      status: 0,
      data: tableData,
    };
  });
}

const ShopModel = {
  name: "String",
  proxy_name: "String",
  price: "Number",
  proxy_price: "Number",
  photo: {
    sid: "ID",
    url: "String",
  },
  attr: {
    sid: "ID",
    name: "String",
    value: "String",
  },
};
handleTable("shop", ShopModel);

module.exports = router;
