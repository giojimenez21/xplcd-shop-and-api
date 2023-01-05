import { NextFunction, Request, Response } from "express";
import { odooClient } from "../clients";
import { ResLogin } from "../interfaces/odoo.interface";

export const connectToOdoo = async ( req: Request, res: Response, next: NextFunction ) => {
    const body = {
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

    try {

        const response = await odooClient.get<ResLogin>("/", { data: body });
        if (!response.data.result)
            return res.status(401).json({ msg: "Credenciales incorrectas." });

        req.id_odoo = response.data.result;
        
    } catch (error: any) {
        console.log(error);
        return res.status(500).json(error.message);
    }

    next();
};
