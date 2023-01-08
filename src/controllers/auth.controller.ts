import bcrypt from 'bcrypt';
import { Request, Response } from "express";
import { generateJWT } from '../helpers';
import { User } from "../models";

interface BodyRegister {
    name: string;
    email: string;
    password: string;
}

export const registerUser = async(req: Request<{},{},BodyRegister>, res: Response) => {
    const { name, email, password } = req.body;
    try {
        const userExist = await User.findOne({ where: { email } });
        if(userExist) return res.status(400).json({msg: "Ya existe un usuario con ese correo."});

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);
        const userNew = await User.create({
            name,
            email,
            password: hashPassword,
            role: "CLIENT",
            access_to_lists: false,
        });
        const token = await generateJWT(userNew.id);

        return res.status(201).json({
            user: userNew,
            token
        });

    } catch (error) {
        return res.status(500).json({ msg: 'Ha ocurrido un error, comuniquese con el administrador.' });
    }
}

interface BodyLogin {
    email: string;
    password: string;
}

export const loginUser = async(req:Request<{},{},BodyLogin>, res: Response) => {
    const { email, password } = req.body;
    try {
        const userExist = await User.findOne({ where: { email } });
        if(!userExist) return res.status(400).json({msg: "No existe ningun usuario con dicho correo."});

        const verifyPassword = bcrypt.compareSync(password, userExist.password);
        if(!verifyPassword) return res.status(400).json({msg: "Contraseña incorrecta."});

        const token = await generateJWT(userExist.id); 
        return res.status(200).json({
            user: userExist,
            token
        });

    } catch (error) {
        return res.status(500).json({ msg: 'Ha ocurrido un error, comuniquese con el administrador.' });
    }
}

export const renewToken = async(req: Request, res: Response) => {
    const { id } = req;
    const token = await generateJWT(id!);
    const user = await User.findOne({ where: { id } });

    return res.status(200).json({
        user,
        token
    });
}