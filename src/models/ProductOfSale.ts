import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { db } from "../database";
import { Sale } from "./Sale";

interface ProductOfSaleModel extends Model<InferAttributes<ProductOfSaleModel>, InferCreationAttributes<ProductOfSaleModel>> {
    id: CreationOptional<number>;
    name: string;
    price: number;
    quantity: number;
    id_sale: number;
}

export const ProductOfSale = db.define<ProductOfSaleModel>(
    "products_of_sales",
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


Sale.hasMany(ProductOfSale, { foreignKey: "id_sale" });
ProductOfSale.belongsTo(Sale, { foreignKey: "id_sale" });