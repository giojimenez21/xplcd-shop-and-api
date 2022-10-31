import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
dotenv.config();

import { routerProducts } from './routes';

const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());

app.use(express.json());


app.use('/products', routerProducts);

app.listen(PORT, () => {
    console.log('Listening http://localhost:' + PORT);
})