import { Router } from "express";

import { validateJWT } from "../middlewares";
import { getListByProductName, getLists } from "../controllers/lists.controller";

export const routerLists = Router();

routerLists.use(validateJWT);

routerLists.get('/getLists', getLists);

routerLists.get('/getListsByProduct/:name', getListByProductName);


