import express from "express";
import chalk from "chalk";
import _USERS from "./users.json";

import db from "./database/db";
import indexRouter from "./routes/index.router";
import apiRouter from "./routes/api.router";

const msg = {
  server: chalk.blue("server    "),
};

const app = express();
const port = 8001;

// connect to db
db.connect();

// middleware
app.use(express.json());

// routes
app.use("/", indexRouter);
app.use("/api", apiRouter);

// server
app.listen(port, () => {
  console.log(`${msg.server}- running on port ${port}`);
});
