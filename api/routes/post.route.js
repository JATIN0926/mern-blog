import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  create,
  getposts,
  deletePost,
  updatePost,
} from "../controllers/post.controller.js";
const router = express.Router();

//  we can do express.Router({caseSensitive:true}); to disable case senstivity of routing , as of now , /getposts , /getPosts , /GETPOSTS all are same

router.post("/create", verifyToken, create);
router.get("/getposts", getposts);
router.delete("/deletepost/:postId/:userId", verifyToken, deletePost);
router.put("/updatepost/:postId/:userId", verifyToken, updatePost);

export default router;
