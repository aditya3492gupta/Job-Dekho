//routes for the user
import express, { Router } from "express";
import { login, register, updateProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/profile/update").post(isAuthenticated, updateProfile);


// const router = Router()

// router.get('/he', (req, res) => {
//     return res.status(201).json({ message: "connected" });
// })
export default router;