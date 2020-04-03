const mysql = require("mysql");
const config = require("./config");

var knex = require('knex')({
  client: "mysql",
  connection: {
    host: config.database.HOST,
    port: config.database.PORT,
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE
  },
  acquireConnectionTimeout: 10000 //断线重连
});

module.exports = knex;
