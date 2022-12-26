import { Router } from "express";
import {
    getAllProducts,
    getProductById,
    getProductByName,
    newSale,
} from "../controllers";
import { validateJWT } from "../middlewares";

export const routerProducts = Router();

routerProducts.get("/", getAllProducts);

routerProducts.get("/getProducts/:rol/:product", getProductByName);

routerProducts.get("/getProductById/:id", getProductById);

routerProducts.post("/newSale", validateJWT, newSale);
