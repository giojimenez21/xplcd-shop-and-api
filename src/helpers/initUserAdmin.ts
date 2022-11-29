import bcrypt from "bcrypt";
import { User } from "../models";

export const createAdmin = async () => {
    try {
        const existAdmin = await User.findOne({ where: { name: "ADMIN" } });

        if (existAdmin) return;

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(process.env.PASSWORD_ADMIN!, salt);

        await User.create({
            name: process.env.NAME_ADMIN!,
            email: process.env.EMAIL_ADMIN!,
            password: hashPassword,
            role: "ADMIN",
            access_to_lists: true
        });
    } catch (error) {
        console.log(error);
    }
};
