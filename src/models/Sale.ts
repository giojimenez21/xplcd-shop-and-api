import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { db } from "../database";

interface SaleModel extends Model<InferAttributes<SaleModel>, InferCreationAttributes<SaleModel>> {
    id: CreationOptional<number>;
    product: string;
    price: number;
    quantity: number;
    total: number;
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
        product: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.FLOAT
        },
        quantity: {
            type: DataTypes.INTEGER
        },
        total: {
            type: DataTypes.FLOAT
        },
        id_client: {
            type: DataTypes.INTEGER
        }
    },
    {
        freezeTableName: true
    }
);