import { Request, Response } from "express";
import { Brand, ProductByList } from "../models";

export const getLists = async(req: Request, res: Response) => {
    try {
        const lists = await Brand.findAll({
            include: {
                model: ProductByList,
                attributes: { exclude: ["id_brand"] }
            }
        });

        return res.status(200).json(lists);

    } catch (error:any) {
        console.log(error);
        return res.status(500).json({msg: error.message});
    }
}