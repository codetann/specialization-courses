import express from "express";
import db from "../database/db";

const router = express.Router();

/* Get */
router.get("/findall", async (req, res) => {
  try {
    const users = await db.findAllUsers();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(404).send(error);
  }
});

/* Post */
router.post("/post", async (req, res) => {
  const newUser = req.body.user;

  try {
    await db.createUser({
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
    });
  } catch (err) {
    console.error(err);
    res.status(404).send(error);
  }
});

export default router;
