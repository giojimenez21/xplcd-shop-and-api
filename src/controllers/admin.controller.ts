import { Request, Response } from "express";
import { Op } from "sequelize";
import { StockByDate, User } from "../models";

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.findAll({
            attributes: { exclude: ["password"] },
            where: {
                id: {
                    [Op.not]: req.id,
                },
            },
        });
        return res.status(200).json(users);
    } catch (error: any) {
        console.log(error);
        return res.status(500).json({ msg: error.message });
    }
};

interface ParamsUserId {
    id: number;
}

export const getUserById = async(req: Request<ParamsUserId>, res: Response) => {
    try {
        const user = await User.findOne({
            attributes: { exclude: ["password"] },
            where: { id: req.params.id }
        });

        if(!user) {
            return res.status(404).json({ msg: "No se encontro ningun usuario." });
        }

        return res.status(200).json(user);

    } catch (error:any) {
        console.log(error);
        return res.status(500).json({ msg: error.message })
    }
}

interface BodyEdit {
    role: string;
    access_to_lists: boolean;
}

export const editUser = async(req: Request<ParamsUserId,{}, BodyEdit>, res: Response) => {
    try {
        const userToEdit = await User.findOne({
            attributes: { exclude: ["password"] },
            where: {id: req.params.id}
        });

        if(!userToEdit) {
            return res.status(404).json({ msg: "No se encontro ningun usuario." });
        }

        await userToEdit.update({...req.body});

        return res.status(200).json({ msg: "Usuario editado con exito." })

    } catch (error:any) {
        console.log(error);
        return res.status(500).json({msg: error.message});
    }
}

interface BodyToLists {
    id: number;
    role: string;
}

export const changeAccessToLists = async (req: Request<{},{},BodyToLists>,res: Response) => {
    const { id, role } = req.body;
    try {
        const userChange = await User.findOne({ where: { id } });

        if (!userChange) {
            return res.status(404).json({ msg: "No existe ningun usuario con ese id." });
        }

        role === "CLIENT"
            ? userChange.update({ access_to_lists: false, role: "CLIENT" })
            : userChange.update({ access_to_lists: true, role});

        return res.status(200).json({ msg: "Estado del usuario actualizado" });
    } catch (error: any) {
        console.log(error);
        return res.status(500).json({ msg: error.message });
    }
};

interface QueryReport {
    date: string;
}

export const getStockForReport = async(req: Request<{}, {}, {}, QueryReport>, res: Response) => {
    try {
        const stock = await StockByDate.findOne({
            where: { createdAt: {
                [Op.substring]: req.query.date
            } }
        });

        return res.status(200).json(stock);
    } catch (error:any) {
        console.log(error);
        return res.status(500).json(error.message)
    }
}