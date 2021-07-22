import chalk from "chalk";

export default (req, res) => {
  if (process.env.NODE_ENV === "development")
    console.log(`${chalk.green("api")}   - graphql enpoint hit`);

  res.status(200).json({ test: "Hello Level Up" });
};
