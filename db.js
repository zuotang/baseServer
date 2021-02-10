const mysql = require("mysql");

module.exports = function (app) {
  var connection = mysql.createConnection({
    host: "192.168.50.6",
    user: "root",
    password: "Wysj3910",
    port: "3306",
    database: "advanced",
  });

  connection.connect();
  app.context.db = connection;
  //执行sql语句
  app.context.sql = function () {
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

  app.context.sqlOne = async function () {
    let res = await app.context.sql(...arguments);
    return res[0];
  };
  return app;
};
