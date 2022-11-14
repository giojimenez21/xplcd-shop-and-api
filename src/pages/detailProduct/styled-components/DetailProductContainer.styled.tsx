import { Box } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface Iprops {
    children: ReactNode | ReactNode[];
}

const DetailProductContainer: FC<Iprops> = ({ children }) => {
    return (
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)">
            <Box
                gridColumn={["1 / 13", "3 / 11", "4 / 10", "5 / 9"]}
                boxShadow="xl"
                padding="1rem"
                border="1px"
                borderColor="gray.200"
                borderRadius="md"
                marginY="1rem"
            >
                {children}
            </Box>
        </Box>
    );
};

export default DetailProductContainer;
