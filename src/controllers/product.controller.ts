import { Response, Request, } from "express";
import { odooClient } from "../clients";
import { generateRestrictions, orderData } from "../helpers";
import { loginOdoo } from "../helpers/odoo";
import { ResAllProducts, ResLocations, ResSearchRead } from "../interfaces/odoo.interface";


export const getAllProducts = async(req:Request, res: Response) => {
    try {
        const numberAuth = await loginOdoo();
        if (!numberAuth) return res.status(401).json({ msg: "Credenciales incorrectas." });

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
                        ["name", "ilike", "sam"],
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

        const response = await odooClient.get<ResAllProducts>("/", {
            data: bodyPetition,
        });

        
        return res.status(200).json({
            phones: response.data.result
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}

interface Params {
    product: string,
    rol: string
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

        return res.status(200).json({
            status: true,
            phones: productsFinal
        });

    } catch (error) {
        console.log(error);
        return res.status(400).json(error)
    }

}
