import { Router } from "express";
import { loginUser, registerUser } from "../controllers";

export const routerAuth = Router();

routerAuth.post('/register', registerUser);

routerAuth.post('/login', loginUser);

