import express from "express";
import API from "../controllers/api.controller";

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
router.get("/find", API.GET.find);
router.get("/findall", API.GET.findAll);
router.get("/filter", API.GET.filter);

/**
 * POST
 *
 * @ /api/post - creates a new user
 */
router.post("/post", API.POST.createUser);

/**
 * PUT
 *
 * @ /api/update - updates a users name and password based on id provided
 */
router.put("/update", API.PUT.updateUser);

/**
 * DELETE
 */
router.delete("/remove", API.DEL.deleteUser);

export default router;
