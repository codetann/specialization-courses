import express from "express";
import chalk from "chalk";

import db from "./database/db";
import indexRouter from "./routes/index.router";

const msg = {
  server: chalk.blue("server    "),
};

const app = express();
const port = 8001;

// connect to db
db.connect();

// routes
app.use("/", indexRouter);

// server
app.listen(port, () => {
  console.log(`${msg.server}- running on port ${port}`);
});
