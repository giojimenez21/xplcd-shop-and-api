import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import fileUpload from 'express-fileupload';
import { v2 as cloudinary } from 'cloudinary';

import { db } from './database';
import { createAdmin, initCrons } from './helpers';
import { routerAdmin, routerAuth, routerLists, routerProducts } from './routes';

const PORT = process.env.PORT || 4000;
process.env.TZ = "America/Mexico_City";
const app = express();

app.use(cors());

app.use(express.json());

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

app.use('/auth', routerAuth);

app.use('/admin', routerAdmin);

app.use('/lists', routerLists);

app.use('/products', routerProducts);

initCrons();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


db.sync().then(() => console.log('DB online.'));

createAdmin().then(() => console.log('Verify admin complete.'));

app.listen(PORT, () => console.log('Listening http://localhost:' + PORT));