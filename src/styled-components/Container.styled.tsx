import { Box } from "@chakra-ui/react"
import { FC, ReactNode } from "react"

interface IProps {
    children: ReactNode | ReactNode[];
    width?: string;
    margin?: string;
}

const Container:FC<IProps> = ({children, width="80%", margin="0 auto"}) => {
    return (
        <Box
            width={width}
            margin={margin}
            maxWidth="1500px"
        >
            {children}
        </Box>
    )
}

export default Container