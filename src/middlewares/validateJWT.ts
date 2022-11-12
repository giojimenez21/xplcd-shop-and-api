import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from "express";

export const validateJWT = async(req: Request, res: Response, next: NextFunction) => {
    const token = req.header("x-token");
    if(!token) return res.status(400).json({msg: "No hay token."});

    try {
        const { id } = jwt.verify(token, process.env.SECRET_JWT!) as { id:number };
        req.id = id;
    } catch (error) {
        return res.status(400).json({msg: "Token no valido"});
    }

    next();
}