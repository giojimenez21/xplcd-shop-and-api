import { Router } from 'express';
import { changeStatusSale, getAllProducts, getAllSales, getProductById, getProductByName, newSale } from '../controllers';
import { validateJWT, validateRoles } from '../middlewares';

export const routerProducts = Router();

routerProducts.get('/', getAllProducts);

routerProducts.get('/getProducts/:rol/:product', getProductByName);

routerProducts.get('/getProductById/:id', getProductById);

routerProducts.get('/sales',[validateJWT, validateRoles("ADMIN")], getAllSales);

routerProducts.post('/newSale', [validateJWT, validateRoles("ADMIN")], newSale);

routerProducts.post('/changeStatusSale/:id', [validateJWT, validateRoles("ADMIN")], changeStatusSale);