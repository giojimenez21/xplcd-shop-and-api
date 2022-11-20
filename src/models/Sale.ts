import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { db } from "../database";
import { User } from "./User";

interface SaleModel extends Model<InferAttributes<SaleModel>, InferCreationAttributes<SaleModel>> {
    id: CreationOptional<number>;
    total: number;
    status: CreationOptional<"OPEN" | "CLOSE">;
    payment_method: "CASH" | "CARD";
    id_client: number;
}

export const Sale = db.define<SaleModel>(
    "sales",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        total: {
            type: DataTypes.FLOAT
        },
        status: {
            type: DataTypes.STRING
        },
        payment_method: {
            type: DataTypes.STRING
        },
        id_client: {
            type: DataTypes.INTEGER
        }
    },
    {
        freezeTableName: true
    }
);

User.hasMany(Sale, { foreignKey: "id_client" });
Sale.belongsTo(User, { foreignKey: "id_client" });