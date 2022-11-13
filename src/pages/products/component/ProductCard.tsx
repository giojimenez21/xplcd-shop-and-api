import { Box, Text } from "@chakra-ui/react"
import { FC } from "react";

interface Product {
    name: string;
    price: number;
}

const ProductCard:FC<Product> = ({name, price}) => {
    return (
        <Box
            boxShadow="xl"
            padding="1rem"
            border="1px"
            borderColor="gray.200"
            borderRadius="md"
            gridColumn={["span 13", "span 6", "span 4", "span 3"]}
        >
            <Text as="h3">{name}</Text>
            <Text as="span" fontSize="2xl" fontWeight="semibold">${price}</Text>
        </Box>
    )
}

export default ProductCard