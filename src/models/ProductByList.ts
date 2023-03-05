import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { db } from "../database";
import { Brand } from "./Brand";

interface ProductByListModel extends Model<InferAttributes<ProductByListModel>, InferCreationAttributes<ProductByListModel>> {
    id: CreationOptional<number>;
    name: string;
    quality: string;
    color: string;
    base: number;
    xp3: number;
    xp4: number;
    xp5: number;
    public: number;
    quantity: number;
    stock_odoo: number;
    link_gsm: string;
    id_brand: number;
    id_odoo: number;
    url_image: number;
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
        color: {
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
        quantity: {
            type: DataTypes.NUMBER
        },
        stock_odoo: {
            type: DataTypes.NUMBER
        },
        link_gsm: {
            type: DataTypes.TEXT
        },
        id_brand: {
            type: DataTypes.NUMBER
        },
        id_odoo: {
            type: DataTypes.INTEGER
        },
        url_image: {
            type: DataTypes.NUMBER
        }
    },
    {
        freezeTableName: true
    }
);

Brand.hasMany(ProductByList, { foreignKey: "id_brand" });
ProductByList.belongsTo(Brand, { foreignKey: "id_brand" });