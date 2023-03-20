import { Request, Response } from "express";
import { Op } from "sequelize";
import { rolesLists } from "../constants";
import { Brand, ProductByList } from "../models";

export const getLists = async(req: Request, res: Response) => {
    try {
        console.log(req.role);
        const roles = rolesLists.find(roleList => roleList.name === req.role);
        
        const lists = await Brand.findAll({
            include: {
                model: ProductByList,
                attributes: [
                    "id",
                    "name",
                    "quality",
                    "color",
                    "quantity",
                    "stock_odoo",
                    "url_image",
                    ...roles?.lists!,
                ],
            },
        });

        return res.status(200).json(lists);
    } catch (error:any) {
        console.log(error);
        return res.status(500).json({ msg: 'Ha ocurrido un error, comuniquese con el administrador.' });
    }
}

interface ParamsList {
    name: string;
}

export const getListByProductName = async(req: Request<ParamsList>, res: Response) => {
    const { name } = req.params;
    try {
        const products = await ProductByList.findAll({
            attributes: {
                exclude: ['id_brand']
            },
            include: {
                model: Brand,
                attributes: {
                    exclude: ["color"],
                },
            },
            where: {
                [Op.or]: [
                    { "$brand.name$": { [Op.substring]: name } },
                    { name: { [Op.substring]: name } },
                ],
            }
        });
        return res.status(200).json(products);
    } catch (error: any) {
        console.log(error);
        return res.status(500).json({ msg: 'Ha ocurrido un error, comuniquese con el administrador.' });
    }
}

interface ParamsListDetail {
    id: number;
}

export const getListProductDetail = async(req: Request<ParamsListDetail>, res: Response) => {
    const { id } = req.params;
    try {
        const product = await ProductByList.findOne({
            where: { id }
        });

        return res.status(200).json(product);
        
    } catch (error: any) {
        console.log(error);
        return res.status(500).json({ msg: 'Ha ocurrido un error, comuniquese con el administrador.' });
    }
}