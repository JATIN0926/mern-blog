import express from "express";
import { UpdateUser , deleteUser ,signOut ,getUsers} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.put("/update/:userId",verifyToken ,UpdateUser)
router.delete("/delete/:userId",verifyToken,deleteUser)
router.post("/signout",signOut)
router.get("/getusers",verifyToken ,getUsers)

export default router;
