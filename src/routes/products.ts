import { Router } from 'express';
import { getAllProducts, getProductByName } from '../controllers';

export const routerProducts = Router();

routerProducts.get('/', getAllProducts);

routerProducts.get('/productsByName/:rol/:product', getProductByName);