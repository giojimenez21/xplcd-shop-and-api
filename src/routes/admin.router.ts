import { Router } from "express";

import { validateJWT, validateRoles } from "../middlewares";
import { changeAccessToLists, getUsers } from "../controllers/admin.controller";

export const routerAdmin = Router();

routerAdmin.use(validateJWT, validateRoles("ADMIN"));

routerAdmin.get('/users', getUsers);

routerAdmin.put('/changeAccessListUser', changeAccessToLists);

