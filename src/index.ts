import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { db } from './database';
dotenv.config();

import { routerAuth, routerProducts } from './routes';

const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());

app.use(express.json());

app.use('/auth', routerAuth)

app.use('/products', routerProducts);

db.sync().then(() => console.log('DB online.'));

app.listen(PORT, () => console.log('Listening http://localhost:' + PORT));