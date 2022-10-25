import { odooClient } from "../config";
import { LoginOdoo, ResLoginOdoo } from "../interfaces/odoo.interface"

export const loginOdoo = async():Promise<number | boolean> => {
    const body:LoginOdoo = {
        jsonrpc: "2.0",
        method: "call",
        params: {
            service: "common",
            method: "login",
            args: [
                process.env.DB!,
                process.env.USERNAME!,
                process.env.PASSWORD!
            ]
        }
    };

    const res = await odooClient.get<ResLoginOdoo>('/', {
        data: body
    });

    return res.data.result;
}