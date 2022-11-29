import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { db } from "../database";

interface UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
    id: CreationOptional<number>;
    name: string;
    email: string;
    password: string;
    role: "ADMIN" | "CLIENT";
    access_to_lists: true | false;
}

export const User = db.define<UserModel>(
    "users", 
    {
        id: {
            type: DataTypes.NUMBER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        role: {
            type: DataTypes.STRING
        },
        access_to_lists: {
            type: DataTypes.BOOLEAN
        }
    },
    {
        freezeTableName: true
    }
);