import express from "express";
import chalk from "chalk";
import db from "./database/db";

const msg = {
  server: chalk.blue("server    "),
};

const app = express();
const port = 8001;

// connect to db
db.connect();

// // db config
// const connection = new Sequelize("db", "user", "pass", {
//   host: "localhost",
//   dialect: "sqlite",
//   storage: "./database/db.sqlite",
//   operatorsAliases: false,
// });

// // connect to db
// connection
//   .authenticate()
//   .then(() => {
//     console.log(`${msg.connection}- connection establised successfully`);
//   })
//   .catch((err) => {
//     console.error(`${msg.error}- unable to connect to database`, err);
//   });

// server
app.listen(port, () => {
  console.log(`${msg.server}- running on port ${port}`);
});
