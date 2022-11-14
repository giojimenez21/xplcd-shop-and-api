import { Box, Button, Text } from "@chakra-ui/react"
import { FC } from "react";
import { Link } from "react-router-dom";
import { ButtonCustom } from "../../../components";
import { Product } from "../../../context";

interface IProps {
    product: Product
}

const ProductCard:FC<IProps> = ({ product }) => {
    return (
        <Box
            boxShadow="xl"
            padding="1rem"
            border="1px"
            borderColor="gray.200"
            borderRadius="md"
            gridColumn={["span 13", "span 6", "span 4", "span 3"]}
        >
            <Text as="h3">{product.name}</Text>
            <Text as="span" fontSize="2xl" fontWeight="semibold">${product.list_price}</Text>
            <Link to={`${product.id}`}>
                <ButtonCustom text="Ver producto" styles={{backgroundColor:"primary", display: "block"}}/>
            </Link>
        </Box>
    )
}

export default ProductCard