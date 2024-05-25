import { Router } from "express";
import { loginUser, registerUser } from "../Controllers/user.controller.js";

const router = Router();

router.route("/registerUser").post(registerUser);

router.route("/loginUser").post(loginUser);

export default router;
