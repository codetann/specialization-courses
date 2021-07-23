import express from "express";
import controller from "../controllers/api.controller";

const router = express.Router();

router.get("/messages", controller.get);
router.post("/messages", controller.post);
router.put("/messages", controller.put);
router.delete("/messages/:id", controller.del);

export default router;
