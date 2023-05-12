import { Sequelize } from "sequelize";

export const db = new Sequelize(
    process.env.DB_API!,
    process.env.USER_DB!,
    process.env.PASSWORD_DB,
    {
        host: process.env.HOST,
        port: 3306,
        dialect: "mysql",
        define: {
            timestamps: false,
        },
        logging: false,
        timezone: "-06:00",
    }
);
