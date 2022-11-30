import { FC } from "react";
import { Link } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react"
import { ButtonCustom } from "../../../../components";
import { ResponseProduct } from "../../../../clients/interface";

interface IProps {
    product: ResponseProduct
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
            <Text as="h3" fontSize="xl">{product.name}</Text>
            <Text as="span" fontSize="2xl" fontWeight="semibold">${product.list_price}</Text>
            <Link to={`${product.id}`}>
                <ButtonCustom text="Ver producto" styles={{backgroundColor:"primary", display: "block"}}/>
            </Link>
        </Box>
    )
}

export default ProductCard