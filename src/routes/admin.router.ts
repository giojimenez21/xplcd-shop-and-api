import { Router } from "express";

import { validateJWT, validateRoles } from "../middlewares";
import { changeAccessToLists, editUser, getMostSelledProducts, getStockForReport, getUserById, getUsers } from "../controllers/admin.controller";

export const routerAdmin = Router();

routerAdmin.use(validateJWT, validateRoles("ADMIN"));

routerAdmin.get('/users', getUsers);

routerAdmin.get('/userById/:id', getUserById);

routerAdmin.put('/editUserById/:id', editUser);

routerAdmin.put('/changeAccessListUser', changeAccessToLists);

routerAdmin.get('/getStockForReport', getStockForReport);

routerAdmin.get('/getMostSelledProducts', getMostSelledProducts)



