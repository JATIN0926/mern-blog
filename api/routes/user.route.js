import express from "express";
import { UpdateUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.put("/update/:userId",verifyToken ,UpdateUser)

export default router;
