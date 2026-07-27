require("dotenv").config();

const development = {
  username: process.env.DB_USER, // username
  password: process.env.DB_PASS, // password
  database: process.env.DB_DATABASE, // db
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT
}

module.exports = { development };