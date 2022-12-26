import { Op, where } from "sequelize";
import { Request, Response } from "express";

import { odooClient } from "../clients";
import { ResPartnerLocation } from "../interfaces/odoo.interface";
import { ProductOfSale, Sale, StockByDate, User } from "../models";
import { addPreviousAndNext, generatePaginate, loginOdoo } from "../helpers";

interface Query {
    page: number;
}

export const getUsers = async (req: Request<{},{},{},Query>, res: Response) => {
    const { page = 1 } = req.query
    const { offset, limit } = generatePaginate(page, 20);
    try {
        const users = await User.findAndCountAll({
            attributes: { exclude: ["password"] },
            where: {
                [Op.and]: [
                    {
                        name: {
                            [Op.ne]: "ADMIN",
                        },
                    },
                    {
                        id: {
                            [Op.ne]: req.id,
                        },
                    },
                ],
            },
            order: [["createdAt", "DESC"]],
            offset,
            limit,
        });
        return res.status(200).json(addPreviousAndNext(users, limit, page));
    } catch (error: any) {
        console.log(error);
        return res.status(500).json({ msg: error.message });
    }
};

interface ParamsUserId {
    id: number;
}

export const getUserById = async (req: Request<ParamsUserId>,res: Response) => {
    try {
        const user = await User.findOne({
            attributes: { exclude: ["password"] },
            where: { id: req.params.id },
        });

        if (!user) {
            return res
                .status(404)
                .json({ msg: "No se encontro ningun usuario." });
        }

        return res.status(200).json(user);
    } catch (error: any) {
        console.log(error);
        return res.status(500).json({ msg: error.message });
    }
};

interface BodyEdit {
    role: string;
    access_to_lists: boolean;
}

export const editUser = async (req: Request<ParamsUserId, {}, BodyEdit>,res: Response) => {
    try {
        const userToEdit = await User.findOne({
            attributes: { exclude: ["password"] },
            where: { id: req.params.id },
        });

        if (!userToEdit) {
            return res
                .status(404)
                .json({ msg: "No se encontro ningun usuario." });
        }

        await userToEdit.update({ ...req.body });

        return res.status(200).json({ msg: "Usuario editado con exito." });
    } catch (error: any) {
        console.log(error);
        return res.status(500).json({ msg: error.message });
    }
};

interface BodyToLists {
    id: number;
    role: string;
}

export const changeAccessToLists = async (req: Request<{}, {}, BodyToLists>,res: Response) => {
    const { id, role } = req.body;
    try {
        const userChange = await User.findOne({ where: { id } });

        if (!userChange) {
            return res
                .status(404)
                .json({ msg: "No existe ningun usuario con ese id." });
        }

        role === "CLIENT"
            ? userChange.update({ access_to_lists: false, role: "CLIENT" })
            : userChange.update({ access_to_lists: true, role });

        return res.status(200).json({ msg: "Estado del usuario actualizado" });
    } catch (error: any) {
        console.log(error);
        return res.status(500).json({ msg: error.message });
    }
};

export const getAllSales = async (req: Request<{},{},{},Query>, res: Response) => {
    const { page = 1 } = req.query;
    const { offset, limit } = generatePaginate(page, 10);
    try {
        const sales = await Sale.findAll({
            include: [
                {
                    model: ProductOfSale,
                },
                {
                    model: User,
                    attributes: ["name", "email"],
                },
            ],
            offset,
            limit
        });

        return res.status(200).json(sales);
    } catch (error) {
        return res.status(500).json(error);
    }
};

interface ParamsSale {
    id: number;
}

export const changeStatusSale = async ( req: Request<ParamsSale | any>, res: Response) => {
    const { id } = req.params;
    try {
        const saleExist = await Sale.findOne({ where: { id } });

        if (!saleExist)
            return res.status(400).json({ msg: "No existe ninguna compra con ese id." });

        saleExist.status === "OPEN"
            ? await Sale.update({ status: "CLOSE" }, { where: { id } })
            : await Sale.update({ status: "OPEN" }, { where: { id } });

        return res.status(200).json({ msg: "Cambio de status exitoso." });

    } catch (error) {
        return res.status(500).json(error);
    }
};

interface ReportQuery {
    startDate: string;
    endDate: string;
}

export const getStockForReport = async (req: Request<{},{},{},ReportQuery>,res: Response) => {
    const { startDate, endDate } = req.query;
    try {
        const stock = await StockByDate.findAll({
            order: [["createdAt", "DESC"]],
            where: {
                createdAt: {
                    [Op.between]: [startDate, endDate]
                }
            }
        });
        return res.status(200).json(stock);
    } catch (error: any) {
        console.log(error);
        return res.status(500).json(error.message);
    }
};

export const getMostSelledProducts = async (req: Request, res: Response) => {
    try {
        const numberAuth = await loginOdoo();
        if (!numberAuth) return res.status(401).json({ msg: "Credenciales incorrectas." });

        const body = {
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
                    [["location_id", "=", 5]],
                    ["id", "display_name", "quantity"],
                ],
            },
        };

        const response = await odooClient.get<ResPartnerLocation>("/", {
            data: body,
        });

        const productsMostSelled = response.data.result
            .sort((a, b) => b.quantity - a.quantity)
            .slice(0, 10);

        return res.status(200).json(productsMostSelled);

    } catch (error: any) {
        console.log(error);
        return res.status(500).json(error.message);
    }
};
