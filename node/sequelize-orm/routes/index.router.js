import express from "express";
import db from "../database/db";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    ////const usr = await db.create("Joe", "Smith", "This is my bio");
    res.json("hello world");
  } catch (error) {
    res.status(404).send(error);
  }
});

export default router;
