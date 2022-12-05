import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { db } from "../database";
import { ProductByList } from "./ProductByList";

interface Version extends Model<InferAttributes<Version>, InferCreationAttributes<Version>> {
    id: CreationOptional<number>;
    name: string;
    id_product_by_list: number;
}

export const VersionByProduct = db.define<Version>(
    "versions_by_product",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.TEXT
        },
        id_product_by_list: {
            type: DataTypes.NUMBER
        },
    },
    {
        freezeTableName: true
    }
);

ProductByList.hasMany(VersionByProduct, { foreignKey: "id_product_by_list" });
VersionByProduct.belongsTo(ProductByList, { foreignKey: "id_product_by_list" });