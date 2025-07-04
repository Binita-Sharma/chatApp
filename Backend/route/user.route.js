import express from 'express';
import {  allUsers, login, logout, signup } from '../controller/user.controller.js';
import secureRoute from '../middleware/secureRoute.js';

//axious helps in recieve and request from http
const router = express.Router();

router.post("/signup",signup);

router.post("/login", login);

router.post("/logout", logout);
//router.get("/allusers", secureRoute, allUsers);

router.get("/allUsers",secureRoute, allUsers)

export default router;