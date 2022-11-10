import axios from "axios";

export const odooClient = axios.create({
    baseURL: process.env.BASEURL,
    headers: {
        'Content-type': 'application/json'
    }
});
