import axios from "axios";
import configDB from "../database/keys";

export const odooClient = axios.create({
    baseURL: configDB.api,
    headers: {
        'Content-type': 'application/json'
    }
});
