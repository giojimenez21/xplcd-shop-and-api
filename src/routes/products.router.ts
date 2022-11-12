import { Router } from 'express';
import { getAllProducts, getProductByName } from '../controllers';

export const routerProducts = Router();

routerProducts.get('/', getAllProducts);

routerProducts.get('/:rol/:product', getProductByName);

routerProducts.get('/saludo', (req, res) => res.send('hola'))