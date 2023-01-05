import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { db } from "../database";
import { Brand } from "./Brand";

interface ProductByListModel extends Model<InferAttributes<ProductByListModel>, InferCreationAttributes<ProductByListModel>> {
    id: CreationOptional<number>;
    name: string;
    quality: string;
    base: number;
    xp3: number;
    xp4: number;
    xp5: number;
    public: number;
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
        base: {
            type: DataTypes.NUMBER
        },
        xp3: {
            type: DataTypes.NUMBER
        },
        xp4: {
            type: DataTypes.NUMBER
        },
        xp5: {
            type: DataTypes.NUMBER
        },
        public: {
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