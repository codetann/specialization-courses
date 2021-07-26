import express from "express";
import db from "../database/db";

const router = express.Router();

/**
 * GET
 *
 * @ /api/find - returns 1 user based on the id provided
 *
 * @ /api/findall - returns all users
 *
 * @ /api/filter - returns users based on criteria
 */
router.get("/find", async (req, res) => {
  const { id } = req.query;

  try {
    const user = await db.findUser(id);
    res.json(user);
  } catch (error) {
    console.error(err);
    res.status(404).send(error);
  }
});
router.get("/findall", async (req, res) => {
  try {
    const users = await db.findAllUsers();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(404).send(error);
  }
});
router.get("/filter", async (req, res) => {
  //// const { name } = req.query;

  try {
    const users = await db.filterUsers();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(404).send(error);
  }
});

/**
 * POST
 *
 * @ /api/post - creates a new user
 */
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
    res.status(404).send(err);
  }
});

/**
 * PUT
 *
 * @ /api/update - updates a users name and password based on id provided
 */
router.put("/update", async (req, res) => {
  const { name, password, id } = req.body;

  try {
    await db.updateUser(name, password, id);
    res.status(200).send("success");
  } catch (err) {
    console.error(err);
    res.status(404).send(err);
  }
});

export default router;
