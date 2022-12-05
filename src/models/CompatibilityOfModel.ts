import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { db } from "../database";
import { ProductByList } from "./ProductByList";

interface Compatibility extends Model<InferAttributes<Compatibility>, InferCreationAttributes<Compatibility>> {
    id: CreationOptional<number>;
    name: string;
    id_product_by_list: number;
}

export const CompatibilityOfModel = db.define<Compatibility>(
    "compatibility_of_models",
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

ProductByList.hasMany(CompatibilityOfModel, { foreignKey: "id_product_by_list" });
CompatibilityOfModel.belongsTo(ProductByList, { foreignKey: "id_product_by_list" });