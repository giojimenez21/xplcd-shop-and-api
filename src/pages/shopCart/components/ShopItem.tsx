import { FC } from "react";
import { Box, Divider, Text } from "@chakra-ui/react";
import { ProductCart } from "../../../context/products/product.interface";

interface IProps {
    product: ProductCart;
}

const ShopItem: FC<IProps> = ({ product }) => {
    return (
        <>
            <Box width="100%" padding="1rem">
                <Text as="h1" fontSize="2xl">
                    Nombre: <strong>{product.name}</strong>
                </Text>
                <Text as="p" fontSize="xl">
                    Precio: <strong>{product.price}</strong>
                </Text>
                <Text as="p" fontSize="xl">
                    Cantidad: <strong>{product.quantity}</strong>
                </Text>
            </Box>
            <Divider />
        </>
    );
};

export default ShopItem;
