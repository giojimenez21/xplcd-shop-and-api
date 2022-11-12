import { Router } from 'express';
import { changeStatusSale, getAllProducts, getAllSales, getProductByName, newSale } from '../controllers';

export const routerProducts = Router();

routerProducts.get('/', getAllProducts);

routerProducts.get('/:rol/:product', getProductByName);

routerProducts.get('/sales', getAllSales);

routerProducts.post('/newSale', newSale);

routerProducts.post('/changeStatusSale/:id', changeStatusSale);