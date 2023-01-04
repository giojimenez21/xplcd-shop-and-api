import { odooClient } from "../clients";
import { LoginOdoo, ResLogin } from "../interfaces/odoo.interface";

export const loginOdoo = async (): Promise<number | boolean> => {
    const body: LoginOdoo = {
        jsonrpc: "2.0",
        method: "call",
        params: {
            service: "common",
            method: "login",
            args: [
                process.env.DB!,
                process.env.USERNAME!,
                process.env.PASSWORD!,
            ],
        },
    };

    const res = await odooClient.get<ResLogin>("/", { data: body });

    return res.data.result;
};

export const generateBodyOdoo = ( numberAuth: number | boolean, table: string, filters: any[], fields: string[]) => ({
    jsonrpc: "2.0",
    method: "call",
    params: {
        service: "object",
        method: "execute",
        args: [
            process.env.DB,
            numberAuth,
            process.env.PASSWORD,
            table,
            "search_read",
            filters,
            fields,
        ],
    },
});
