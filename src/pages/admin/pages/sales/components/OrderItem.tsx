import { FC } from "react";
import { Box } from "@chakra-ui/react";
import { ProductsOfSale } from "../../../../../context";


interface IProps {
    product: ProductsOfSale;
}

const OrderItem:FC<IProps> = ({product}) => {
    return (
        <Box padding="1rem 2rem">
            <h2>{product.name}</h2>
            <p>Precio: ${product.price}</p>
            <p>Cantidad: {product.quantity}</p>
        </Box>
    );
};

export default OrderItem;
