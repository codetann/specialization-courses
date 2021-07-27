import express from "express";
import API from "../controllers/api.controller";

const router = express.Router();

/**
 * GET
 *
 * @ api/find - returns 1 user based on the id provided
 * @ api/findall - returns all users
 * @ api/filter - returns users based on criteria
 * @ api/allposts - returns all posts
 */
router.get("/find", API.GET.find);
router.get("/findall", API.GET.findAll);
router.get("/filter", API.GET.filter);
router.get("/allposts", API.GET.allPosts);

/**
 * POST
 *
 * @ /api/post - creates a new user
 */
router.post("/create/user", API.POST.createUser);
router.post("/create/post", API.POST.createPost);

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
