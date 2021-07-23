import express from "express";
import controller from "../controllers/api.controller";

const router = express.Router();

// send all pies
router.get("/pies", controller.get);

// search all pies
router.get("/search", controller.search);

// filer pies based on id
router.get("/pies/:id", controller.getById);

export default router;
