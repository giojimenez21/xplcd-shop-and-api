import { Router } from "express";
import {
    getAllProducts,
    getProductById,
    getProductByName,
    newSale,
} from "../controllers";
import { connectToOdoo, validateJWT } from "../middlewares";

export const routerProducts = Router();

routerProducts.get("/", connectToOdoo ,getAllProducts);

routerProducts.get("/getProducts/:rol/:product", connectToOdoo, getProductByName);

routerProducts.get("/getProductById/:id", connectToOdoo, getProductById);

routerProducts.post("/newSale", validateJWT, newSale);
