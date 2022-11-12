import { Router } from "express";
import { loginUser, registerUser, renewToken } from "../controllers";
import { validateJWT } from "../middlewares";

export const routerAuth = Router();

routerAuth.post('/register', registerUser);

routerAuth.post('/login', loginUser);

routerAuth.get('/renew', validateJWT, renewToken);

