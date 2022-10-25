import { Response, Request, } from "express";
import { odooClient } from "../config";
import { loginOdoo } from "../helpers/odoo";
import { ResSearchRead } from "../interfaces/odoo.interface";

interface body {
    product: string,
    rol: string
}

export const getAllProducts = (req:Request, res: Response) => {
    res.send('Hola');
}

export const getProductByName = async(req: Request, res: Response) => {
    const { product, rol }:body = req.body;
    try {
        const numberAuth = await loginOdoo();
        if(!numberAuth) return res.status(401).json({ msg: 'Credenciales incorrectas.'} );

        const bodyPetition = {
            jsonrpc: "2.0",
            method: "call",
            params: {
                service: "object",
                method: "execute",
                args: [
                    process.env.DB,
                    numberAuth,
                    process.env.PASSWORD,
                    "product.template",
                    "search_read",
                    [
                        "&",
                        ["name", "ilike", product],
                        "|",
                        "|",
                        ["name", "ilike", "DISP"],
                        ["name", "ilike", "LCD"],
                        ["name", "ilike", "TOUCH"],
                    ],
                    ["id", "name", "list_price", "qty_available"],
                ],
            },
        };

        const resClient = await odooClient.get<ResSearchRead>('/', {
            data: bodyPetition
        });

        return res.status(200).json(resClient.data.result);


    } catch (error) {
        console.log(error);
        return res.status(400).json({
            error
        })
    }

}
