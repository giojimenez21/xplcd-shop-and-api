import { Box } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface IProps {
    children: ReactNode | ReactNode[];
}

const LoginContainer: FC<IProps> = ({ children }) => {
    return (
        <Box
            width="100vw"
            height="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <Box
                display="grid"
                width="100%"
                gridTemplateColumns="repeat(12, 1fr)"
                padding="1rem"
            >
                <Box
                    gridColumn={["1 / 13", "3 / 11","4 / 10", "5 / 9"]}
                    margin="0 auto"
                    boxShadow="2xl"
                    padding="2rem"
                    width="100%"
                >
                    {children}
                </Box>
            </Box>
        </Box>
    );
};

export default LoginContainer;
