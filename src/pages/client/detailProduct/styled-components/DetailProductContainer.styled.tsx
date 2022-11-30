import { Box } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface Iprops {
    children: ReactNode | ReactNode[];
}

const DetailProductContainer: FC<Iprops> = ({ children }) => {
    return (
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)">
            {children}
        </Box>
    );
};

export default DetailProductContainer;
