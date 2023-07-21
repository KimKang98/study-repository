const sql = require("mssql");
const config = require("./db.config");

const pool = new sql.ConnectionPool(config)
  .connect()
  .then((pool) => {
    console.log("Connected to MSSQL");
    return pool;
  })
  .catch((err) => console.log("Database Connection Failed! Bad Config: ", err));

console.log("test2");

module.exports = pool;
