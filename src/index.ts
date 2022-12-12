import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { db } from './database';
import { createAdmin, getStockFinal, getStockInitial } from './helpers';
import { routerAdmin, routerAuth, routerLists, routerProducts } from './routes';
dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());

app.use(express.json());

app.use('/auth', routerAuth);

app.use('/admin', routerAdmin);

app.use('/lists', routerLists);

app.use('/products', routerProducts);

getStockInitial.start();

getStockFinal.start();

db.sync().then(() => console.log('DB online.'));

createAdmin().then(() => console.log('Verify admin complete.'))

app.listen(PORT, () => console.log('Listening http://localhost:' + PORT));