const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  port: parseInt(process.env.DB_PORT),
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSOWRD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATEBASE,
  options: {
    encrypt: false, // Use this if you're on Windows Azure
    trustServerCertificate: true,
  },
  pool: { max: 5, min: 1, idleTimeoutMillis: 30000 },
};
