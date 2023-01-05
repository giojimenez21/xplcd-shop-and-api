import { Router } from "express";
import {
    changeAccessToLists,
    changeStatusSale,
    createBrand,
    createProduct,
    editBrand,
    editProduct,
    editUser,
    getAllSales,
    getBrands,
    getMostSelledProducts,
    getStockForReport,
    getStockProductsOfDate,
    getUserById,
    getUsers,
} from "../controllers";

import { validateJWT, validateRoles, connectToOdoo } from "../middlewares";

export const routerAdmin = Router();

routerAdmin.use(validateJWT, validateRoles("ADMIN"));

routerAdmin.get("/users?:page", getUsers);

routerAdmin.get("/userById/:id", getUserById);

routerAdmin.put("/editUserById/:id", editUser);

routerAdmin.put("/changeAccessListUser", changeAccessToLists);

routerAdmin.get("/sales?:page", getAllSales);

routerAdmin.post("/changeStatusSale/:id", changeStatusSale);

routerAdmin.get("/getStockForReport", getStockForReport);

routerAdmin.get("/getMostSelledProducts", connectToOdoo, getMostSelledProducts);

routerAdmin.get("/getStockProductsOfDate", connectToOdoo, getStockProductsOfDate);

routerAdmin.get("/getBrands", getBrands);

routerAdmin.post("/createBrand", createBrand);

routerAdmin.put("/editBrand/:id", editBrand);

routerAdmin.post("/createProduct", createProduct);

routerAdmin.put("/editProduct/:id", editProduct);