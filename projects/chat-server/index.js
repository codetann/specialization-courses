import express from "express";
import path from "path";
import chalk from "chalk";

import indexRouter from "./routes/index.router";

const app = express();
const PORT = 4000;

// middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// routes
app.use("/", indexRouter);

// server
app.listen(PORT, () => {
  const msg = chalk.blue("server");
  console.log(`\n${msg}   - running on port 4000\n`);
});
