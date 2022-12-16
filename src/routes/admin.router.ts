import { Router } from "express";
import {
    changeAccessToLists,
    changeStatusSale,
    editUser,
    getAllSales,
    getMostSelledProducts,
    getStockForReport,
    getUserById,
    getUsers,
} from "../controllers";

import { validateJWT, validateRoles } from "../middlewares";

export const routerAdmin = Router();

routerAdmin.use(validateJWT, validateRoles("ADMIN"));

routerAdmin.get("/users", getUsers);

routerAdmin.get("/userById/:id", getUserById);

routerAdmin.put("/editUserById/:id", editUser);

routerAdmin.put("/changeAccessListUser", changeAccessToLists);

routerAdmin.get("/sales", getAllSales);

routerAdmin.post("/changeStatusSale/:id", changeStatusSale);

routerAdmin.get("/getStockForReport", getStockForReport);

routerAdmin.get("/getMostSelledProducts", getMostSelledProducts);
