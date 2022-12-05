import { Router } from "express";

import { validateJWT } from "../middlewares";
import { getListByProductName, getListProductDetail, getLists } from "../controllers/lists.controller";

export const routerLists = Router();

routerLists.use(validateJWT);

routerLists.get('/getLists', getLists);

// Movil
routerLists.get('/getListsByProduct/:name', getListByProductName);
// Movil
routerLists.get('/getListProductDetail/:id', getListProductDetail);



