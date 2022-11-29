import { Router } from "express";

import { validateJWT } from "../middlewares";
import { changeAccessToLists, getUsers } from "../controllers/admin.controller";

export const routerAdmin = Router();

routerAdmin.use(validateJWT);

routerAdmin.get('/users', getUsers);

routerAdmin.put('/changeAccessListUser/:id', changeAccessToLists);

