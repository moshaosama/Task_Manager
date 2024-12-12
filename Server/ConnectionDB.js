const sql = require("mysql2");

exports.connection = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "task_manager",
});
