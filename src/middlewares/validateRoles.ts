import { NextFunction, Request, Response } from "express";

export const validateRoles = (...roles:string[]) => ((req: Request, res: Response, next: NextFunction) => {
    if(!roles.includes(req.role!)) {
        return res.status(401).json({msg: "El usuario no tiene los permisos necesarios para realizar esta operación."});
    }

    next();
});