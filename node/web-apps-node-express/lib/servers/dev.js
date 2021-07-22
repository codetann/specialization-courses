import express from "express";
import path from "path";
import open from "open";
import chalk from "chalk";
import webpack from "webpack";
import config from "../../webpack.config.dev";
import indexRouter from "../routes/index.router";

const PORT = 3000;
const compiler = webpack(config);
const app = express();

// middleware
app.use(
  require("webpack-dev-middleware")(compiler, {
    publicPath: config.output.publicPath,
  })
);

// routes
app.use("/", indexRouter);

// server
app.listen(PORT, () => {
  console.log(chalk.green(`[ server ] - listening on port ${PORT} \n`));
  open(`http://localhost:${PORT}`);
});
