import express from 'express';
import { getUserProfile, login, logout, signup } from '../controller/user.controller.js';
import secureRoute from '../middleware/secureRoute.js';

//axious helps in recieve and request from http
const router = express.Router();

router.post("/signup",signup);

router.post("/login", login);

router.post("/logout", logout);

router.get("/getUserProfile",secureRoute, getUserProfile)

export default router;