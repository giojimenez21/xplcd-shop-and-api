import { FC, ReactNode } from "react";
import { Box } from "@chakra-ui/react";

import { Navbar } from "../navbar";
import { Footer } from "../footer";

interface IProps {
    children: ReactNode | ReactNode[];
}

const Layout: FC<IProps> = ({ children }) => {
    return (
        <Box
            width="100%"
            minHeight="100vh"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
        >
            <Navbar />
            <Box flex="1">
                { children }
            </Box>
            <Footer />
        </Box>
    );
};

export default Layout;
