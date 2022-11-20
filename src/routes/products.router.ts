import { Router } from 'express';
import { changeStatusSale, getAllProducts, getAllSales, getProductById, getProductByName, newSale } from '../controllers';

export const routerProducts = Router();

routerProducts.get('/', getAllProducts);

routerProducts.get('/getProducts/:rol/:product', getProductByName);

routerProducts.get('/getProductById/:id', getProductById);

routerProducts.get('/sales', getAllSales);

routerProducts.post('/newSale', newSale);

routerProducts.post('/changeStatusSale/:id', changeStatusSale);