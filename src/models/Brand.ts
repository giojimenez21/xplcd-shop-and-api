import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { db } from "../database";

export interface BrandModel extends Model<InferAttributes<BrandModel>, InferCreationAttributes<BrandModel>> {
    id: CreationOptional<number>;
    name: string;
    color: string;
}

export const Brand = db.define<BrandModel>(
    "brand",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        color: {
            type: DataTypes.STRING
        }
    },
    {
        freezeTableName: true
    }
);