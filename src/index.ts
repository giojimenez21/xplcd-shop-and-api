import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import { routerProducts } from './routes';

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());

app.use('/products', routerProducts);

app.listen(PORT, () => {
    console.log('Listening http://localhost:' + PORT);
})