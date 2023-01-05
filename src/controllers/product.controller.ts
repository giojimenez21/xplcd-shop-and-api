import { Response, Request } from "express";

import { odooClient } from "../clients";
import { generateBodyOdoo } from "../helpers/odoo";
import { ProductOfSale, Sale } from "../models";
import {
    ResAllProducts,
    ResLocations,
    ResSearchRead,
    ResWarehouse,
} from "../interfaces/odoo.interface";
import {
    cleanNameProduct,
    generateRestrictions,
    getColorProduct,
    getDescription,
    getTypeProduct,
    orderData,
    setPriceProduct,
} from "../helpers";

export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const body = generateBodyOdoo(
            req.id_odoo!,
            "product.template",
            [],
            ["id", "name", "list_price", "image_512"]
        );

        const response = await odooClient.get<ResAllProducts>("/", {
            data: body,
        });

        const phones = response.data.result.map((phone) => ({
            ...phone,
            name: cleanNameProduct(phone.name),
            list_price: setPriceProduct(phone.list_price),
            type: getTypeProduct(phone.name),
            color: getColorProduct(phone.name),
        }));

        return res.status(200).json(phones);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};

interface Params {
    product: string;
    rol: string;
    id: string;
}

export const getProductById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const firstBody = generateBodyOdoo(
            req.id_odoo!,
            "product.template",
            [["id", "=", id]],
            ["id", "name", "list_price", "image_512"]
        );

        const secondBody = generateBodyOdoo(
            req.id_odoo!,
            "stock.quant",
            ["&", ["product_id", "=", +id], ["location_id", "=", 8]],
            ["product_id", "location_id", "quantity"]
        );

        const promises: Promise<ResAllProducts | ResWarehouse | any>[] = [
            odooClient.get("/", { data: firstBody }),
            odooClient.get("/", { data: secondBody }),
        ];

        const [resProducts, resWarehouse] = await Promise.all(promises);

        return res.status(200).json({
            ...resProducts.data.result[0],
            name: cleanNameProduct(resProducts.data.result[0].name),
            description: getDescription(resProducts.data.result[0].name),
            image: resProducts.data.result[0].image_512,
            type: getTypeProduct(resProducts.data.result[0].name),
            color: getColorProduct(resProducts.data.result[0].name),
            list_price: setPriceProduct(resProducts.data.result[0].list_price),
            quantity: resWarehouse.data.result[0] ? resWarehouse.data.result[0].quantity : 0
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json(error);
    }
};

export const getProductByName = async (req: Request, res: Response) => {
    const { product, rol } = req.params;

    try {
        const { fields, restrictions } = generateRestrictions(rol.toUpperCase());

        const firstBody = generateBodyOdoo(
            req.id_odoo!,
            "product.template",
            [["name", "ilike", product]],
            fields
        );

        const secondBody = generateBodyOdoo(
            req.id_odoo!,
            "stock.quant",
            [
                "&",
                ["product_id", "ilike", product],
                ...restrictions,
            ],
            ["product_id", "location_id", "quantity", "display_name"]
        );

        const promises: Promise<ResSearchRead | ResLocations | any>[] = [
            odooClient.get("/", { data: firstBody }),
            odooClient.get("/", { data: secondBody }),
        ];
        const [resClient, resLocations] = await Promise.all(promises);
        const productsFinal = orderData(resClient.data.result, resLocations.data.result);

        return res.status(200).json({
            qunatity: productsFinal.length,
            phones: productsFinal,
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json(error);
    }
};

interface Product {
    name: string;
    price: number;
    quantity: number;
}

interface Sale {
    total: number;
    id_client: number;
    payment_method: "CASH" | "CARD";
    products: Product[];
}

export const newSale = async (req: Request<{}, {}, Sale>, res: Response) => {
    const { total, payment_method, id_client, products } = req.body;

    try {
        const sale = await Sale.create({
            total,
            id_client,
            payment_method,
        });

        products.forEach(async (product) => {
            await ProductOfSale.create({
                id_sale: sale.id,
                ...product,
            });
        });

        return res.status(200).json({
            msg: "Su compra  fue realizada, espere que se contacten con usted via correo electrónico.",
        });
    } catch (error) {
        return res.status(500).json(error);
    }
};


