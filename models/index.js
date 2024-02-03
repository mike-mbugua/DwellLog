const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

const db_name = process.env.DATABASE;
const db_username = process.env.DATABASE_USERNAME;
const password = process.env.DATABASE_PASSWORD;

const sequelize = new Sequelize(db_name, db_username, password, {
  host: "127.0.0.1",
  dialect: "mysql",
  define: {
    timestamps: true,
  },
  sync: {
    alter: true,
  },
});

sequelize
  .authenticate()
  .then(() => {
    "database connected";
  })
  .catch((err) => console.log(err));

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user")(sequelize, DataTypes);
db.sequelize
  .sync({ force: false })
  .then(() => console.log("database synced"))
  .catch((err) => console.log(err));

module.exports = db;
