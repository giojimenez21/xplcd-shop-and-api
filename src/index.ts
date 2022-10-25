import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import { routerProducts } from './routes';

const app = express();

app.use(express.json());

app.use('/products', routerProducts);

app.listen(process.env.PORT || 4000, () => {
    console.log('Listening http://localhost:4000');
})