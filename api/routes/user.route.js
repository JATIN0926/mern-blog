import express from "express";
import { UpdateUser , deleteUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.put("/update/:userId",verifyToken ,UpdateUser)
router.delete("/delete/:userId",verifyToken,deleteUser)

export default router;
