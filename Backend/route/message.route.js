import express from "express";

import { sendMessage } from "../controller/message.controller.js";

const router = express.Router();

router.post("/send/:id", sendMessage);

export default router;