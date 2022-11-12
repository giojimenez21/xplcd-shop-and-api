import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { db } from "../database";
import { Sale } from "./Sale";

interface UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
    id: CreationOptional<number>;
    name: string;
    email: string;
    password: string;
    role: "ADMIN" | "CLIENT";
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
        }
    },
    {
        freezeTableName: true
    }
);

User.hasMany(Sale, { foreignKey: "id_client" });
Sale.belongsTo(User, { foreignKey: "id_client" });