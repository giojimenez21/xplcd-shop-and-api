import axios from "axios";

export const odooClient = axios.create({
    baseURL: process.env.API_ODOO,
    headers: {
        'Content-type': 'application/json'
    }
});
