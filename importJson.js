const fs = require("fs");
const dayjs = require("dayjs");
const initMysql = require("./db");

function getCtx() {
  let app = { context: {} };
  initMysql(app);
  return app.context;
}

(async () => {
  let db = getCtx();
  let rawdata = fs.readFileSync("./inits/data.json");
  let student = JSON.parse(rawdata);

  for (let item of student) {
    //console.log(item);
    let date = dayjs(item.date, ["YYYY-MM-DD"]).format("YYYY-MM-DD HH:mm:ss");
    let { insertId: pid } = await db.sql("INSERT INTO post (title,thumb,video,pubdate_str,pubdate,`update`,tags,dir) VALUES (?,?,?,?,?,?,?,?) ", [
      item.name,
      item.cover,
      item.video,
      date,
      date,
      dayjs.unix(item.create_time).format("YYYY-MM-DD HH:mm:ss"),
      item.tags.join(","),
      item.dir,
    ]);
    for (let photo of item.photos) {
      let photoRes = await db.sql("INSERT INTO photo (pid,src) VALUES (?,?)", [pid, photo]);
    }
    for (let actor of item.actress) {
      let res = await db.sql("SELECT * FROM actor WHERE name=?", actor);
      let aid;
      if (res.length == 0) {
        let res = await db.sql("INSERT INTO actor (name) VALUES (?)", [actor]);
        aid = res.insertId;
      } else {
        aid = res[0].id;
      }
      let { insertId } = await db.sql("INSERT INTO actor_post (aid,pid) VALUES (?,?)", [aid, pid]);
    }
    //console.log(pid);
  }
  console.log("完成");
  //
  // let list = await ctx.sql("select * from post");
  // console.log(list);
})();
