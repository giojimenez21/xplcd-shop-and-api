import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { db } from "../database";
import { Brand } from "./Brand";

interface ProductByListModel extends Model<InferAttributes<ProductByListModel>, InferCreationAttributes<ProductByListModel>> {
    id: CreationOptional<number>;
    name: string;
    quality: string;
    xp31: number;
    xp41: number;
    xp51: number;
    xp61: number;
    xp71: number;
    id_brand: number;
}

export const ProductByList = db.define<ProductByListModel>(
    "products_by_list",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        quality: {
            type: DataTypes.STRING
        },
        xp31: {
            type: DataTypes.NUMBER
        },
        xp41: {
            type: DataTypes.NUMBER
        },
        xp51: {
            type: DataTypes.NUMBER
        },
        xp61: {
            type: DataTypes.NUMBER
        },
        xp71: {
            type: DataTypes.NUMBER
        },
        id_brand: {
            type: DataTypes.NUMBER
        },
    },
    {
        freezeTableName: true
    }
);

Brand.hasMany(ProductByList, { foreignKey: "id_brand" });
ProductByList.belongsTo(Brand, { foreignKey: "id_brand" });