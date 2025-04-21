import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const app = Router();

app.post("/register", registerUser);

export default app;
