import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { db } from "../database";
import { Sale } from "./Sale";

interface ProductModel extends Model<InferAttributes<ProductModel>, InferCreationAttributes<ProductModel>> {
    id: CreationOptional<number>;
    name: string;
    price: number;
    quantity: number;
    id_sale: number;
}

export const Product = db.define<ProductModel>(
    "products",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.FLOAT
        },
        quantity: {
            type: DataTypes.INTEGER
        },
        id_sale: {
            type: DataTypes.INTEGER
        }
    },
    {
        freezeTableName: true
    }
);


Sale.hasMany(Product, { foreignKey: "id_sale" });
Product.belongsTo(Sale, { foreignKey: "id_sale" });