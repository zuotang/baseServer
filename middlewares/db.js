const mysql = require("mysql");

module.exports = async function (app) {
  var connection = mysql.createConnection({
    host: "localhost",
    user: "tz",
    password: "wysj3910",
    port: "3306",
    database: "shop",
  });

  connection.connect();
  let ctx = app.context;
  ctx.db = connection;
  //执行sql语句
  ctx.sql = function () {
    return new Promise((resolve, reject) => {
      connection.query(...arguments, function (err, result) {
        if (err) {
          reject(err);
          return;
        }
        resolve(result);
      });
    });
  };

  ctx.sqlOne = async function () {
    let res = await ctx.sql(...arguments);
    return res[0];
  };
  function handleError(err) {
    if (err) {
      // 如果是连接断开，自动重新连接

      if (err.code === "PROTOCOL_CONNECTION_LOST" || err.code === "ER_CON_COUNT_ERROR") {
        connection.connect();
      } else {
        console.error(err.stack || err);
      }
    }
  }
  ctx.db.on("error", handleError);

  return app;
};
