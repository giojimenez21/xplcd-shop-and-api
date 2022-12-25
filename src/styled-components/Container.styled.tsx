import { FC, ReactNode } from "react"
import { Box, ChakraComponent } from "@chakra-ui/react"

interface IProps {
    children: ReactNode | ReactNode[];
    width?: string | string[];
    margin?: string;
    padding?: string;
}

const Container:FC<IProps> = ({children, width=["100%","95%","80%"], margin="0 auto", padding}) => {
    return (
        <Box
            width={width}
            margin={margin}
            padding={padding}
            maxWidth="1500px"
        >
            {children}
        </Box>
    )
}

export default Container