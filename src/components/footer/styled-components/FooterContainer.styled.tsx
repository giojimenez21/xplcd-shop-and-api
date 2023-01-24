import { FC, ReactNode } from "react";
import { Box } from "@chakra-ui/react";

interface IProps {
    children: ReactNode | ReactNode[];
}

const FooterContainerStyled: FC<IProps> = ({ children }) => {
    return (
        <Box backgroundColor="black" padding="1rem" color="white" as="footer">
            <Box
                display="grid"
                gridTemplateColumns="repeat(10, 1fr)"
                gap="1rem"
                width={["100%", "100%", "100%", "80%"]}
                margin="auto"
            >
                {children}
            </Box>
        </Box>
    );
};

export default FooterContainerStyled;
