import { Box } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface IProps {
    children: ReactNode | ReactNode[];
}

const ProductsContainer: FC<IProps> = ({ children }) => {
    return (
        <Box
            maxWidth="1500px"
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gap="1rem"
            margin="0 auto"
            padding="2rem"
        >
            {children}
        </Box>
    );
};

export default ProductsContainer;
