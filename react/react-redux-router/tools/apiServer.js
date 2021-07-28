const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "db.json"));

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  setTimeout(next, 200);
});
server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }

  next();
});
server.post("/courses/", (req, res, next) => {
  const error = validateCourse(req.body);
  if (error) {
    res.status(400).end(error);
  } else {
    req.body.slug = createSlug(req.body.title);
    next();
  }
});
