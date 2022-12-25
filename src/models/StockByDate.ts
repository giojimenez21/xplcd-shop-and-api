import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { db } from "../database";

export interface StockByDateModel extends Model<InferAttributes<StockByDateModel>, InferCreationAttributes<StockByDateModel>> {
    id: CreationOptional<number>;
    initial100P: number;
    final100P: number;
    initial320P: number;
    final320P: number;
    initialWh: number;
    finalWh: number;
    initialGar: number;
    finalGar: number;
    createdAt: CreationOptional<string>;
}

export const StockByDate = db.define<StockByDateModel>(
    "stock_by_date",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        initial100P: {
            type: DataTypes.INTEGER
        },
        final100P: {
            type: DataTypes.INTEGER
        },
        initial320P: {
            type: DataTypes.INTEGER
        },
        final320P: {
            type: DataTypes.INTEGER
        },
        initialWh: {
            type: DataTypes.INTEGER
        },
        finalWh: {
            type: DataTypes.INTEGER
        },
        initialGar: {
            type: DataTypes.INTEGER
        },
        finalGar: {
            type: DataTypes.INTEGER
        },
        createdAt: {
            type: DataTypes.DATE
        }
    },
    {
        freezeTableName: true,
        timestamps: true
    }
);