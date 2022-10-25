import { Response, Request, } from "express";
import { odooClient } from "../config";
import { generateRestrictions, orderData } from "../helpers";
import { loginOdoo } from "../helpers/odoo";
import { ResLocations, ResSearchRead } from "../interfaces/odoo.interface";

interface Params {
    product: string,
    rol: string
}

export const getAllProducts = (req:Request, res: Response) => {
    res.send('Hola');
}

export const getProductByName = async(req: Request<Params>, res: Response) => {
    const { product, rol } = req.params;
    
    try {
        const numberAuth = await loginOdoo();
        if(!numberAuth) return res.status(401).json({ msg: 'Credenciales incorrectas.'} );

        const { fields, restrictions } = generateRestrictions(rol.toUpperCase());

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
                    fields,
                ],
            },
        };

        const bodyPetition2 = {
            jsonrpc: "2.0",
            method: "call",
            params: {
                service: "object",
                method: "execute",
                args: [
                    process.env.DB,
                    numberAuth,
                    process.env.PASSWORD,
                    "stock.quant",
                    "search_read",
                    [
                        "&",
                        ["product_id", "ilike", product],
                        "|",
                        "|",
                        ["product_id", "ilike", "DISP"],
                        ["product_id", "ilike", "LCD"],
                        ["product_id", "ilike", "TOUCH"],
                        ...restrictions
                    ],
                    ["product_id","location_id","quantity","display_name"],
                ],
            },
        }
        
        const promises: Promise<ResSearchRead | ResLocations | any>[] = [
            odooClient.get("/", { data: bodyPetition }),
            odooClient.get("/", { data: bodyPetition2 }),
        ];
        const [ resClient, resLocations ]= await Promise.all(promises);
        const productsFinal = orderData(resClient.data.result, resLocations.data.result);

        return res.status(200).json(productsFinal);

    } catch (error:any) {
        return res.status(400).json({
            error: error.message
        })
    }

}
