import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from "express";
import { User } from '../models';

export const validateJWT = async(req: Request, res: Response, next: NextFunction) => {
    const token = req.header("x-token");
    if(!token) return res.status(400).json({msg: "No hay token."});

    try {
        const { id } = jwt.verify(token, process.env.SECRET_JWT!) as { id:number };
        const user = await User.findOne({ where:{ id }});
        
        req.id = id;
        req.role = user?.role;
        req.access_to_lists = user?.access_to_lists;

    } catch (error) {
        return res.status(400).json({msg: "Token no valido"});
    }

    next();
}